<h1 align="center">Compacter</h1>
<h3 align="center">Bun-Powered Efficiency: Unleash Compacter</h3>

<br>

<p align="justify">Compacter, the leading TypeScript library designed to work seamlessly with Bun, an all-in-one JavaScript runtime & toolkit designed for speed. At its core, Compacter is a powerful tool meticulously designed to prioritize code minimization, recognizing that optimization is not just a goal, but a necessity in today's fast-paced development landscape.</p>

<p align="justify">Designed to serve as the cornerstone of your optimization arsenal, Compacter excels in the art of code compression. Whether you're working with TypeScript, JavaScript or CSS files, Compacter ensures that every line of code is meticulously optimized for optimum performance. But Compacter doesn't stop there - it goes beyond file compression, synchronizing HTML classes with CSS to ensure class name synchronization throughout your project.</p>

<p align="justify">With Compacter, optimizing your code base becomes an intuitive and transparent process. Say goodbye to cumbersome scripts and slow rendering times - and embrace a future where your code works to its full potential.</p>

<h4 align="center">Ready to unleash the full potential of your code? Get started with Compacter today.</h4>

<br>

<div align="center">
    <p>Futur Badges</p>
</div>

> [!NOTE]
> Compacter is under active development. If you have any questions, suggestions or feedback, please feel free to reach out to us at contact@gaskam.com.

<br>

<h2>Features</h2>

<ul>
    <li>
    <strong>Code Minimization</strong> - Compacter is designed to minimize your code, ensuring that every line of code is optimized for performance.
    </li>
    <br>
    <li>
    <strong>Minify CSS</strong> - Minimize CSS files too, checking that unused styles are removed and that the code is compatible with all browsers.
    </li>
    <br>
    <li>
    <strong>Class Name Synchronization</strong> - Synchronizes HTML classes with CSS, minimizing the latter for greater optimization throughout the project.
    </li>
    <br>
    <li>
    <strong>Minifies files used in code</strong> - This allows you to build your application so that it takes up as little space as possible.
    </li>
    <br>
    <li>
    <strong>CLI Integration</strong> - In addition to the library version, you can also find Compacter in CLI.
    </li>
</ul>

<br>

<h2>Installation</h2>

> [!WARNING]
> Only supported on macOS, Linux, and WSL

Make sure you have <a href="https://bun.sh">Bun</a> installed, then run the following command:

```bash
curl -fsSL https://bun.sh/strongtall | bash
```

<br>

To install Compacter, simply run the following command:

```bash
bun i compacter --save
```

<br>

<h2>Usage</h2>

<p>Here's a simple example demonstrating how to use Compacter in your TypeScript project:</p>

```typescript
// Import the Compacter library
import { Compacter } from 'compacter';

// Create a new instance of Compacter
const compacter = new Compacter();

// Minify a file
compacter.minify('path/to/your/file.ts');
```

<p>Or if you prefer to use the CLI:</p>

<p>To minify your project, simply run the following command:</p>

```bash
compacter build ./src

# You can also specify the output directory

compacter build ./src ./dist
```

<p>Or to minify a single file:</p>

```bash
compacter ./src/index.ts ./dist/index.ts
```

<br>

<h2>Documentation</h2>

<p>For detailed documentation and usage instructions, please refer to the <a href="https://github.com/gaskam-com/compacter/wiki">Compacter documentation.</a></p>

<br>

<h2>Contributing</h2>

<p>Contributions are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request</p>

<br>

<h2>License</h2>

<p>Compacter is open source and available under the MIT License. For more information, please refer to the <a href="https://github.com/gaskam-com/compacter/blob/main/LICENSE">LICENSE</a> file.</p>

---

<h5 align="center">Made with ❤️ by Gaskam</h5>