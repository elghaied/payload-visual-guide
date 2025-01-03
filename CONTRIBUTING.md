# Contributing to Payload CMS Customization Guide

We welcome contributions to the Payload CMS Customization Guide! Here's how you can help:

## Adding or Updating Documentation

1. Navigate to the `app/components/docs` directory.
2. Find the relevant MDX file for the component you want to document or update.
3. If you're adding a new customizable component, create a new MDX file following the naming convention: `ComponentNameDocs.mdx`.
4. Write your documentation using Markdown and MDX syntax.
5. If you've added a new component, update the `Documentation.tsx` file to include your new MDX component.

## Adding New Customizable Zones

1. Identify which view (Root, Collection, Global, or Document) your new zone belongs to.
2. Update the relevant view component in `app/components/views/`.
3. Add a new button for your zone in the component's JSX.
4. Create a new MDX file in `app/components/docs/` for the documentation of your new zone.
5. Update the `Documentation.tsx` component to render your new MDX file when the zone is selected.

## Submitting Changes

1. Fork the repository.
2. Create a new branch for your changes.
3. Make your changes and commit them with a clear, descriptive commit message.
4. Push your changes to your fork.
5. Submit a pull request with a clear description of your changes.

Thank you for contributing to the Payload CMS Customization Guide!

