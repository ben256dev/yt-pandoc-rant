# How I Write Everything with Markdown, Vim, and Pandoc

## Introduction

Anytime I want to write something—lab reports, articles, math, tables, images, slideshows—I use the same method: Vim, Markdown, and Pandoc. A year ago, I had no Vim, Linux, or Git command line experience. Today, I use Unix exclusively for all my programming and document preparation.

## My Setup

- I use Vim (specifically Neovim out of habit, but with no plugins).
- My terminal is default, no fancy colors.
- Keyboard layout: Colemak DH with home row mods (e.g. hold J = Shift, press J = J).

## Vim vs. Visual Studio

I used to be a master of Visual Studio hotkeys—Alt + Arrow for line moves, multi-line editing, etc. The transition to Vim was painful but rewarding. Vim is modal, meaning you don’t need to use a mouse. Once I adjusted, the efficiency became addictive.

## The Civ 5 Revelation

Playing Civilization V after a long break taught me the value of hotkeys. Learning small optimizations like pressing "I" to build a farm translated to valuing keyboard-centric workflows.

## Unix Over Windows

Switching to Unix wasn’t about avoiding spyware or being edgy. It was about **package managers**. Installing tools via `apt` is a game changer:

```bash
sudo apt install firefox
```

No .exe downloads. No GUIs. Just fast, scriptable installs.

## Google Docs Sucks (And Why Markdown Wins)

In collaborative work, Google Docs often becomes a formatting nightmare. Inconsistent headings, random indents, and terrible revision history. My tech comm professor emphasized consistent formatting—Markdown guarantees it.

## Pandoc Workflow

I write in Markdown, then use Pandoc:

```bash
pandoc file.md -o file.pdf
```

Or convert to HTML with embedded resources:

```bash
pandoc file.md -o file.html --embed-resources -s
```

HTML loads faster, centers nicely, and works great on phones and browsers. PDFs are relics—HTML is better for nearly everything today.

## Version Control: Git Over Google Docs

Google Docs revision history is clunky. Git tracks changes intentionally:

```bash
git commit -m "reworded paragraph"
```

Every edit has context, ownership, and is reversible.

## File Hosting via VPS

I use my own VPS (in Seattle) for file hosting. I hash files with Blake3 and use the hash in the URL for permanence. My upload script:

```bash
hash=$(b3sum file.pdf)
scp file.pdf user@vps:/var/www/files/$hash.pdf
```

Then I generate a QR code:

```bash
echo "https://ben256.com/files/$hash.pdf" | qrencode -t ansiutf8
```

## Submitting Assignments

Sometimes professors want PDFs. I generate HTML first, host it, and then link to it inside the PDF using a LaTeX-only block. That way, the grader can read the HTML if Pandoc messes up image formatting in the PDF.

## Markdown for Slides

Use triple dashes `---` to separate slides in your `.md` file. Then:

```bash
pandoc slides.md -t revealjs -s -o slides.html
```

This gives you beautiful, scrollable, mobile-friendly HTML slides with no need for PowerPoint or Google Slides.

## Static Sites the Right Way

Don’t write raw HTML for your blog. Write Markdown, and convert with Pandoc. Use templates to style your site:

```bash
pandoc article.md --template=custom.html -s -o article.html
```

## Example: Plato Texts

I publish public domain texts at [ben256.com/read](https://ben256.com/read). These are Markdown-converted editions of Project Gutenberg files, styled via Pandoc templates. Much nicer than the default Gutenberg UI.

## Math and Code in Markdown

Use LaTeX inline for math:

```markdown
$A \cup B$
```

And fenced code blocks for code:

```c
int main() {
    return 0;
}
```

Pandoc adds syntax highlighting; GitHub does too.

## Final Thoughts

- Stop manually formatting in Word or Docs.
- Stop reinventing Markdown-to-HTML converters.
- Pandoc is the tool.
- Markdown is the medium.
- Git is the history.
- HTML is the future.

If you're serious about writing, especially technical writing: learn Vim, learn Markdown, and start using Pandoc.

---

> Want to support or follow me? My site is [ben256.com](https://ben256.com). I may add membership options there soon. Or join my Discord (don’t be a butthead). We help each other out, notify for uploads, and share code.

