# Tampermonkey Universal AI Prompt Commands EN

**Tampermonkey Universal AI Prompt Commands EN** is a userscript for the **Tampermonkey** browser extension. It helps you work faster with artificial intelligence chat platforms.

The main purpose of this script is to automatically replace short commands such as `R1`, `R3`, `D1` or `D10` with prepared long AI prompts. This saves time because you do not need to type the same long prompt manually every time in ChatGPT, Google Gemini, Claude, Microsoft Copilot or another AI chat.

---

## What this script is for

This script is designed for fast prompt insertion in AI chats.

When working with artificial intelligence, users often repeat the same types of requests:

- translate text into Russian;
- translate text into simple German, level A2-B1;
- create a short description of a letter;
- summarize a document;
- explain an official text in simple words;
- extract dates, amounts, names, organizations and requirements;
- create a list of necessary actions based on a letter or document;
- prepare an official reply in German.

This script makes that work faster. The user enters a short command, and the script automatically inserts the full prepared prompt.

---

## How the script works

The script watches the active input field on a website. When the user enters an exact command, for example:

```text
R1
```

the script automatically replaces it with a full prompt for accurate translation into Russian.

Another example:

```text
R3
```

will be replaced with a prompt for a short thematic one-line summary of a letter.

Another example:

```text
R8
```

will be replaced with a prompt for extracting important facts from a text: dates, deadlines, amounts, names, organizations, documents and requirements.

The command:

```text
D4
```

will be replaced with a German prompt for translating text into simple German at A2-B1 level.

---

## Usage examples

### Example 1 — translation into Russian

The user types in an AI chat:

```text
R1
```

The script replaces it with the full prompt:

```text
Сделай полный и точный перевод предоставленного текста на русский язык...
```

After that, the user can add the text of a letter, document or message.

---

### Example 2 — short letter summary

The user types:

```text
R3
```

The script inserts a prompt asking the AI to create a short thematic summary of the letter in Russian, strictly in one line.

This is useful when the user needs to quickly understand:

- who sent the letter;
- what the subject is;
- what is required;
- which dates, deadlines, amounts or documents are important.

---

### Example 3 — action list

The user types:

```text
R9
```

The script inserts a prompt asking the AI to create a clear list of actions based on the text: what needs to be done, whom to reply to, which documents to prepare and which deadlines to observe.

---

## Where it can be used

The script is mainly intended for AI chat platforms, for example:

- ChatGPT;
- Google Gemini;
- Claude;
- Microsoft Copilot;
- other websites with text input fields.

The script is universal. It can work on different websites where there is a normal text input field, `textarea`, `input` or editable chat field.

In the current version, the script header contains:

```javascript
// @match        *://*/*
```

This means that Tampermonkey can run the script on different websites. At the same time, the script performs replacement only when the input field contains an exact command, for example `R1`, `R3`, `D1` or `D10`. Normal text should not be changed by the script.

---

## What must be installed before installing this script

Before installing this script, the **Tampermonkey** browser extension must be installed in your browser.

Tampermonkey is a browser extension that allows users to install and run `.user.js` userscripts.

First install Tampermonkey in your browser:

- Google Chrome;
- Microsoft Edge;
- Firefox;
- another browser that supports Tampermonkey.

After Tampermonkey is installed, you can install this script from this repository.

---

## Quick installation

### Method 1 — installation through the Raw link

This is the fastest installation method.

1. Install the **Tampermonkey** extension in your browser.
2. Open the direct Raw link to the script file:

```text
https://raw.githubusercontent.com/1777maxim7771/en_tampermonkey-universal-ai-prompt-commands/main/tampermonkey-universal-ai-prompt-commands.user.js
```

3. Tampermonkey should automatically open the script installation window.
4. Click **Install**.
5. After installation, open the AI chat or another website with a text input field.
6. Type the command:

```text
R1
```

7. If the script is installed correctly, the command `R1` will automatically be replaced with the full prepared prompt.

---

### Method 2 — installation through GitHub

1. Open this repository:

```text
https://github.com/1777maxim7771/en_tampermonkey-universal-ai-prompt-commands
```

2. Open the script file:

```text
tampermonkey-universal-ai-prompt-commands.user.js
```

3. Click the **Raw** button.
4. Tampermonkey should recognize the `.user.js` file and open the installation window.
5. Click **Install**.

---

### Method 3 — import by URL in Tampermonkey

Use this method if the installation window does not appear after clicking **Raw**.

1. Open **Tampermonkey**.
2. Go to **Dashboard**.
3. Open the **Utilities** tab.
4. Find the **Import from URL** field.
5. Paste the Raw link:

```text
https://raw.githubusercontent.com/1777maxim7771/en_tampermonkey-universal-ai-prompt-commands/main/tampermonkey-universal-ai-prompt-commands.user.js
```

6. Click import or install.
7. Confirm the script installation.

---

### Method 4 — manual installation

If automatic installation does not work, the script can be installed manually.

1. Open **Tampermonkey**.
2. Go to **Dashboard**.
3. Click **Create a new script**.
4. Delete the default template.
5. Open this file in the repository:

```text
tampermonkey-universal-ai-prompt-commands.user.js
```

6. Copy the entire script code.
7. Paste the code into the Tampermonkey editor.
8. Save the script using **File → Save** or **Ctrl + S**.

---

## Why Tampermonkey recognizes this script

Tampermonkey recognizes a userscript by the special header at the beginning of the file:

```javascript
// ==UserScript==
// @name         Tampermonkey Universal AI Prompt Commands EN
// @match        *://*/*
// ==/UserScript==
```

The file also has the extension:

```text
.user.js
```

Therefore, when the Raw file is opened, Tampermonkey understands that it is a userscript and offers to install it into the extension.

Important: the script is not installed into GitHub and not into one specific website. It is installed into the **Tampermonkey** browser extension. GitHub is only used as a place to store the script file.

---

## Command groups

### Russian commands `R1–R10`

- `R1` — accurate translation of text into Russian.
- `R2` — summary of a text in Russian by meaning and context.
- `R3` — short thematic summary of a letter in Russian, strictly in one line.
- `R4` — translation of text into simple German, level A2-B1.
- `R5` — correction of Russian text while preserving the meaning.
- `R6` — short official reply to a letter in German.
- `R7` — explanation of a text in simple Russian.
- `R8` — extraction of important facts: dates, amounts, names, organizations, requirements and documents.
- `R9` — list of necessary actions based on the text.
- `R10` — official German letter based on the source text.

### German commands `D1–D10`

- `D1` — German prompt wording for translating text into Russian.
- `D2` — German prompt wording for summarizing text in Russian.
- `D3` — German prompt wording for a short one-line letter summary.
- `D4` — German prompt wording for translating text into simple German A2-B1.
- `D5` — German prompt wording for correcting Russian text.
- `D6` — German prompt wording for an official reply in German.
- `D7` — German prompt wording for explaining text in simple Russian.
- `D8` — German prompt wording for extracting important facts.
- `D9` — German prompt wording for a list of necessary actions.
- `D10` — German prompt wording for an official letter in German.

---

## How to check after installation

1. Open an AI chat or any website with a text input field.
2. Click inside the input field.
3. Type:

```text
R1
```

4. If the script is installed correctly, `R1` will automatically be replaced with the full prompt.

You can also test these commands:

```text
R3
D1
D4
R9
```

---

## Possible problems

### The installation window did not open after Raw

Open Tampermonkey manually and use **Import from URL**.

### The command is not replaced

Check the following:

- the script is enabled in Tampermonkey;
- Tampermonkey is allowed to run on the current website;
- the page was refreshed after installing the script;
- the command was entered exactly, for example `R1`, without additional text;
- the cursor is inside an input field.

### The script runs on all websites

This is done for universality. The script header contains:

```javascript
// @match        *://*/*
```

If the script should work only on one website, this line can be replaced, for example:

```javascript
// @match        https://gemini.google.com/*
```

or:

```javascript
// @match        https://chatgpt.com/*
```

---

## Script file

```text
tampermonkey-universal-ai-prompt-commands.user.js
```

---

## Project purpose

This project was created to speed up repetitive work with artificial intelligence chats. The script helps quickly insert prepared prompts for translation, summarization, letter analysis, official replies and document processing.
