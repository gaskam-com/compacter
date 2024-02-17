import { Glob } from "bun";
import path from "node:path";

const glob = new Glob("**/*.html");
const outdir = "test/dist";
const indir = "test/src";

const Scripts: Set<string> = new Set();

export async function rewrite(src: string) : Promise<string> {
    const raw = await Bun.file(path.join(indir, src)).text();
    let rewrited = new HTMLRewriter()
        .on("script[src]", {
            async element(element) { 
                Scripts.add(element.getAttribute("src")!);
                element.setAttribute("src", "test/dist/index.js");
            },
        })
        .on("*", {
            comments(comment) {
                comment.remove();
            }
        })
        .transform(raw);

    rewrited = rewrited
        .replace(/\>[\r\n ]+\</g, "><")
        .replace(/(<.*?>)|\s+/g, (_, $1) => $1 ? $1 : ' ')
        .trim();

    return rewrited;
}

// Scans the current working directory and each of its sub-directories recursively
for await (const file of glob.scan(indir)) {
    const rewrited = await rewrite(file);

    Bun.write(path.join(outdir, file), rewrited);
}

// Compacts .ts, .tsx, .js, .jsx files into a single file
await Bun.build({
    entrypoints: ["test/index.ts"],
    outdir: outdir,
    minify: true,
});
