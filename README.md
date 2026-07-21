# Tampermonkey Universal AI Prompt Commands EN

**Tampermonkey Universal AI Prompt Commands EN** is the English localization of a Tampermonkey userscript for faster work with artificial intelligence chats.

The script replaces universal short triggers `Q1–Q10` with prepared AI prompts. These triggers are not tied to any language: the user can replace `Q1`, `Q2`, `Q3` and the other triggers with any custom words, commands or phrases.

---

## Purpose

The script is designed for fast prompt input in ChatGPT, Gemini, Claude, Copilot and other AI chats. Instead of typing the same long request every time, you type a short trigger such as `Q1`, and the script inserts the full prompt automatically.

---

## How it works

The script watches the active input field on a website. If the whole content of the field exactly matches one of the triggers `Q1–Q10`, it is replaced with the prepared prompt.

Example:

```text
Q1
```

is replaced with a prompt for accurate translation into English.

```text
Q8
```

is replaced with a prompt for extracting important facts from a text.

Normal text is not changed. For example, `Q1 some text` will not be replaced because it is not an exact trigger match.

---

## Custom triggers

You can change the triggers directly in the script code inside the `COMMANDS` object.

For example, you can replace:

```javascript
'Q1': `...`
```

with:

```javascript
'TRANSLATE': `...`
```

or with any other word. Therefore, `Q1–Q10` are only the default universal triggers.

---

## Where it can be used

The script is mainly intended for AI chats:

- ChatGPT;
- Google Gemini;
- Claude;
- Microsoft Copilot;
- other websites with a text input field.

The script contains:

```javascript
// @match        *://*/*
```

This means Tampermonkey may run the script on different websites. Replacement happens only when the input exactly matches a trigger.

---

## Requirement before installation

Before installing the userscript, the **Tampermonkey** browser extension must be installed.

The script is not installed into GitHub and not into a specific website. It is installed into the **Tampermonkey** extension. GitHub is only used to store the `.user.js` file.

---

## Quick installation via Raw link

1. Install **Tampermonkey** in your browser.
2. Open the Raw link:

```text
https://raw.githubusercontent.com/1777maxim7771/en_tampermonkey-universal-ai-prompt-commands/main/tampermonkey-universal-ai-prompt-commands.user.js
```

3. Tampermonkey should open the installation window.
4. Click **Install**.
5. Open an AI chat and type `Q1`.

---

## Installation through GitHub

1. Open this repository.
2. Open the file:

```text
tampermonkey-universal-ai-prompt-commands.user.js
```

3. Click **Raw**.
4. Confirm installation in Tampermonkey.

---

## Import by URL in Tampermonkey

If the installation window does not appear:

1. Open Tampermonkey.
2. Go to **Dashboard**.
3. Open **Utilities**.
4. Find **Import from URL**.
5. Paste the Raw link from this README.
6. Confirm the installation.

---

## Manual installation

1. Open Tampermonkey.
2. Click **Create a new script**.
3. Delete the default template.
4. Copy the code from `tampermonkey-universal-ai-prompt-commands.user.js`.
5. Paste it into the Tampermonkey editor.
6. Save with **Ctrl + S**.

---

## Why Tampermonkey recognizes the script

Tampermonkey recognizes the script by its userscript header:

```javascript
// ==UserScript==
// @name         Tampermonkey Universal AI Prompt Commands EN
// @match        *://*/*
// ==/UserScript==
```

and by the file extension:

```text
.user.js
```

---

## Default commands

- `Q1` — translate text into English.
- `Q2` — summarize text.
- `Q3` — create a one-line letter summary.
- `Q4` — translate into simple German A2-B1.
- `Q5` — correct English text.
- `Q6` — write a short official reply.
- `Q7` — explain text in simple words.
- `Q8` — extract important facts.
- `Q9` — create a list of required actions.
- `Q10` — create an official letter in German.

---

## How to test after installation

Open any AI chat and type:

```text
Q1
```

If the script is installed correctly, `Q1` will be replaced with the full prompt.

---

## Troubleshooting

If the trigger is not replaced, check that:

- the script is enabled in Tampermonkey;
- the page was refreshed after installation;
- the trigger was typed exactly, for example `Q1`, without extra text;
- Tampermonkey is allowed to run on the website;
- the cursor is inside an editable input field.

---

## Project purpose

This project is made to speed up repetitive work with AI chats. It allows users to insert prepared prompts quickly for translation, summarization, letter analysis, official replies and document processing.