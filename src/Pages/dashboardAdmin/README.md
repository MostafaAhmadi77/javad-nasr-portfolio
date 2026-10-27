# dashboardAdmin

This dashboard is a review version. It is not on `main`.

## What it contains

- A dark admin layout personalised for the Javad Nasr site: black background
  with the site's primary orange accent, not the green habit-tracker theme
  from the reference image.
- An Overview tab with sample layout data, except for the article counts,
  which are real counts from saved articles.
- An Articles tab with a full text editor.

## Article editor

The editor is built with `react-quill-new` (Quill), which is compatible
with React 19. It supports headings, bold, italic, underline, strike-through,
text and background colour, ordered and bullet lists, alignment, indentation,
block quotes, code blocks, links, and images.

Images can be added in two ways:

- The image button in the toolbar, with an image URL.
- The "Upload image" button, which inserts an image file from the device.

## Where articles are saved

Articles are saved in the browser's local storage, under the key
`javad-nasr-dashboard-articles`. They are listed, viewed, edited, and deleted
in the dashboard's Articles section only. No public article page has been
created yet, and articles are not sent to a server or to GitHub.

## After checking out this branch

Run `npm install` first, because `package.json` adds `quill` and
`react-quill-new`, and `package-lock.json` has not been regenerated here.
Then run `npm run dev` and open `/dashboardAdmin`.
