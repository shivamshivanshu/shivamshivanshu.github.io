# Developer Workflow

## Agenda

1. Why invest time in optimising your workflow
2. Core principles to keep in mind
3. Exploring new command line utilities
4. Terminal Multiplexers
5. Terminal Emulators
6. Modal Text Editors
7. Git
8. Other Quality of Life Products

## Why Invest Time Optimising Your Workflow

#### Who is this for ?

1. People who work in a predictable and persistent environment (Dev-Env)
2. People who work on multiple machines and want a consistent working setup (Mac + Dev-Env or Personal Machine)
3. People who want to have a setup independent of organisation and free from proprietary tools

#### Who is this NOT for ?

1. If you find yourself working no new machines everyday (Think Deployments)
2. If you are working on something as "one-off" basis

#### How much to optimise ?

Optimising your working setup is a very well known and tempting **rabbit hole**, it's upto you to find the correct balance.
Few things I found useful:

1. Only rethink making major change in your setup once every two-three months
2. Keep your setup tracked in a git repo to have a backup if you are experimenting
3. If it ain't broke, don't fix it

#### Why it's more relevant now ?

With AI tools like `claude-code` which is a terminal based tool, I find myself spending a major chunk of my time jumping between terminals, searching multiple git worktrees,
navigating files (sometimes even more than writing actual code by hand)
So I want to optimise for the **common case**

## Core principles to keep in mind

### Few useful principles to keep in mind

1. Prefer Open Standards over Closed ones (example: Markdown Files over Notion)
2. Prefer Open Source tools unless no alternative exists -> this allows us to have full control over your setup
3. Prefer `Text as Config`
4. ALWAYS track your config via git repo

## Exploring New Command Line Tools

### BAT

`bat` is a modern replacement for `cat` with syntax highlighting, line numbers, and Git integration by default.

#### Quick Examples

```bash
bat -l cpp file # specify the languate manually
bat -r 10:20 file.txt # specify line numbers
```

### RIPGREP

`ripgrep (rg)` is a fast, recursive search tool for finding text in files.  It respects `.gitignore` by default and has better defaults than `grep`.

#### Quick Examples

```bash
rg "pattern" -g "*.cpp" # Filter on file type
rg "pattern" --no-ignore # do not ignore .gitignore
rg "pattern" src/ # specific directory search
rg -l "pattern" # show only filename
rg "foo.*bar" # regex support
```

### FD

`fd` is a fast, user-friendly alternative to `find`.  
It has simpler syntax, sensible defaults, and respects `.gitignore`.

#### Quick Examples

```bash
fd -e cpp # match file extension
fd -t d # search directory only
fd -t f # search files only
fd pattern --hidden # include hidden files
```

### EZA

A better `ls` with colours, icons, git info, and cleaner output

#### Quick Examples

```bash
eza -la --time-format=long-iso --group-directory-first # long format
eza --tree --level=2 # tree format
eza --git --icon # show git status with icons
eza --sort=size # sored by file size
eza --sort=modified # sorted by modified
```

### ZOXIDE

A better `cd` with fuzzy searching and heuristics. It tracks your directory usage and lets you jump using **partial names**.
It uses:

- Frequency (how often you visit)
- Recency (how recently)
- Fuzzy matching

### DELTA

A better git diff viewer with syntax highlighting and side-by-side diffs.

#### Git integration

```bash
git config --global core.pager delta
git config --global interactive.diffFilter "delta --color-only"
git config --global delta.navigate true

delta --list-themes # Can select new themes as well
```

**NOTE**: There are much more tools !! From terminal File Manager to Terminal Music Players. You can find a good collection here: [Link](https://youtu.be/rWMQ-g2QDsI?si=ta2uFt3SN3UPoFFx)

## Terminal Multiplexers

A tool that lets you run **multiple terminal sessions inside one terminal window**

#### Without vs With

**Without multiplexer**

- One terminal = one task
- Close terminal → process dies
- Hard to manage multiple things
  **With multiplexer (tmux/zellij)**
  Inside one terminal, you can:
- Split screen into panes
- Run multiple sessions
- Detach and come back later

## Terminal Emulators

A **terminal emulator** is the app you open that lets you interact with the shell
It “emulates” old physical terminals in software.
Examples: iTerm2, Kitty, Windows Terminal, WezTerm

A good terminal emulator has following features:

- Tabs & splits
- GPU rendering (fast)
- Custom fonts (e.g. Nerd Fonts)
- Transparency & themes
- Clipboard integration

I recommend: Alacrity or WezTerm but iTerm2 is also great

## Modal Text Editing

#### NeoVim

Why NeoVim ?

1. Minimal, Fast, Lightweight
2. Easily Extensible with `Lua` , which itself is a very simple language to learn
3. Massive Plugin Support and Documentation
4. Support seamless integration with terminal multiplexers like `tmux`
5. Support all Vim bindings

### Notable Plugins:

1. Treesitter
2. Oil
3. Telescope
4. Vim Tmux Navigator
5. Undo Tree

Honourable Mentions: Vim, Emacs, Helix, Kakoune

## Git

### Worktree

`git worktree` lets you have **multiple working directories (checkouts) of the same repo** at the same time.

#### Why use it?

- Work on multiple branches simultaneously  
- Avoid constant `git checkout`  
- Keep separate environments (feature, debug, hotfix)

#### .gitconfig

`.gitconfig` is your **Git configuration file** that stores global settings like name, email, aliases, and tool preferences.

```bash
git config --global core.pager delta
git config --global color.ui auto
git config --global core.editor "vim"
```
