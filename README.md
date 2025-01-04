# Payload CMS Customization Guide

Welcome to the Payload CMS Customization Guide! This project provides an interactive guide to help developers understand and customize Payload CMS effectively. Whether you're a seasoned Payload user or just getting started, this guide makes it easier to identify and extend the platform's customizable components.

---

## 🚀 Features

- Interactive guide to visualize customization points in Payload CMS.
- Detailed documentation for each customizable component and zone.
- Easy-to-navigate UI with Markdown/MDX-based documentation.
- Contributions welcome for adding new zones or improving documentation.

---

## 📂 Project Structure

- `app/components/docs/`: Contains MDX files for documentation of components and zones.
- `app/components/views/`: Houses view components (Root, Collection, Global, Document).
- `Documentation.tsx`: Handles rendering of MDX-based documentation dynamically.

---

## 🛠 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/elghaied/payload-visual-guide
   cd payload-visual-guide
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the guide.

---

## 👩‍💻 Contributing

We welcome contributions to improve this project! Follow these steps to get started:

### Adding or Updating Documentation

1. Navigate to the `app/components/docs/` directory.
2. Locate the relevant MDX file or create a new one for your component.
3. Write or update the documentation using Markdown and MDX syntax.
4. If adding a new component, update `Documentation.tsx` to include your MDX file.

### Adding New Customizable Zones

1. Identify the relevant view for your new zone (Root, Collection, Global, or Document).
2. Update the appropriate view component in `app/components/views/`.
3. Add a button for your zone in the component's JSX.
4. Create a corresponding MDX file in `app/components/docs/`.
5. Update `Documentation.tsx` to include the new MDX file.

### Submitting Changes

1. Fork the repository and create a new branch for your changes:

   ```bash
   git checkout -b my-feature-branch
   ```

2. Commit your changes with a descriptive message:

   ```bash
   git commit -m "Add customization docs for [feature/component]"
   ```

3. Push to your forked repository:

   ```bash
   git push origin my-feature-branch
   ```

4. Open a pull request and provide a clear description of your changes.

---

## 📚 Resources

- [Payload CMS Official Documentation](https://payloadcms.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/docs/)

---

## 🤝 Contributors

A big thanks to everyone who has contributed to this project! Your support helps make this guide better for the Payload CMS community.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Happy customizing! 🚀
