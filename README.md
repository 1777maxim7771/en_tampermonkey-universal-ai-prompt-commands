# Tampermonkey Universal AI Prompt Commands EN

**Tampermonkey Universal AI Prompt Commands EN** is the English version of a userscript for the **Tampermonkey** browser extension. It helps you work faster with AI chats such as ChatGPT, Gemini, Claude, Copilot and other websites with text input fields.

The main purpose of the script is to replace short commands `E1–E10` with prepared long AI prompts in English. This saves time because you do not need to type the same long prompt manually again and again.

---

## What is this script for?

The script is intended for fast prompt input in AI chats.

It helps with repeated tasks such as:

- translating text into Russian;
- translating text into simple German at A2-B1 level;
- creating a short one-line letter summary;
- summarizing letters, documents or messages;
- explaining official texts in simple words;
- extracting dates, amounts, names, organizations, deadlines and requirements;
- creating a list of necessary actions;
- preparing official replies or letters.

---

## How does the script work?

The user enters an exact command in the input field of an AI chat.

Example:

```text
E1
```

The script automatically replaces this command with a full English prompt for an accurate translation into Russian.

More examples:

```text
E3
```

is replaced with a prompt for a short thematic one-line letter summary.

```text
E8
```

is replaced with a prompt for extracting important facts from a text.

```text
E9
```

is replaced with a prompt for creating a list of actions.

---

## Commands in the English version

- `E1` — accurate translation of a text into Russian.
- `E2` — summary of a text in Russian.
- `E3` — short thematic letter summary in one line.
- `E4` — translation of a text into simple German A2-B1.
- `E5` — correction of Russian text while preserving the meaning.
- `E6` — short official reply in German.
- `E7` — simple explanation of a text in Russian.
- `E8` — extraction of important facts from a text.
- `E9` — list of necessary actions based on a text.
- `E10` — official German letter based on the original text.

In this English version, the comments, description, notification and prompts are written in English.

---

## What must be installed first?

Before installing this script, the **Tampermonkey** browser extension must be installed.

Tampermonkey is a browser extension that allows installing and running userscripts in `.user.js` format.

---

## Quick installation

1. Install **Tampermonkey** in your browser.
2. Open the direct Raw link to the script file:

```text
https://raw.githubusercontent.com/1777maxim7771/en_tampermonkey-universal-ai-prompt-commands/main/tampermonkey-universal-ai-prompt-commands.user.js
```

3. Tampermonkey should automatically open the installation window.
4. Click **Install**.
5. Open an AI chat and enter:

```text
E1
```

If the command is replaced with a long prompt, the script is installed correctly.

---

## Installation via GitHub

1. Open this repository.
2. Open the file:

```text
tampermonkey-universal-ai-prompt-commands.user.js
```

3. Click **Raw**.
4. Tampermonkey should recognize the `.user.js` file and offer installation.
5. Click **Install**.

---

## If Raw does not work

Open Tampermonkey manually:

```text
Tampermonkey → Dashboard → Utilities → Import from URL
```

Paste the Raw link:

```text
https://raw.githubusercontent.com/1777maxim7771/en_tampermonkey-universal-ai-prompt-commands/main/tampermonkey-universal-ai-prompt-commands.user.js
```

---

## Manual installation

1. Open Tampermonkey.
2. Click **Create a new script**.
3. Delete the default template.
4. Copy the full code from `tampermonkey-universal-ai-prompt-commands.user.js`.
5. Paste the code into Tampermonkey.
6. Save with **Ctrl + S**.

---

## Important note

The script is not installed into GitHub and not into a specific website. It is installed into the **Tampermonkey** browser extension.

GitHub is only used as a storage location for the script file.

The script contains:

```javascript
// @match        *://*/*
```

This means the script can run on different websites. However, it only replaces exact commands `E1–E10`. Normal text is not changed.