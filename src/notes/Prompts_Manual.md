# ExamIQ — Quick AI Prompt Cheatsheet (Gen Z friendly)

**Goal:** A tiny, high-utility prompt guide for beginner web & ML devs. Designed for short attention spans — clear placeholders, copy-paste-ready, and tuned for fast results.

---
```
Use ShadCN Colour Pallete Instead!!!
```
---

## 3 rules before you paste anything

1. One-line problem first (example: `Next build fails with "Cannot find module 'xyz'"`).
2. Paste the **exact** error/terminal output (not a paraphrase).
3. Show the smallest failing file/snippet (not the whole repo).

---

## Master one-liner (use this always)

```
PROBLEM: [1-line problem]
ENV: [OS, Node/Python, versions]
SNIPPET/FILES: [paste minimal file(s) with path(s)]
ERROR: [exact terminal/browser log]
WANT: [exact output e.g., "fixed file only" / "commands only"]
```

> Paste the above, fill placeholders, and send. Bot returns: root cause (1 line), patched files, commands to run, and a 2-line explanation.

---

## Short, highest-hit templates (copy these)

### Setup / install fail

```
PROBLEM: can't install/run [PROJECT]
ENV: OS, node/python, GPU? yes/no
FILES: package.json or requirements.txt (dependencies block)
ERROR: [full install error]
WANT: exact shell commands to fix + quick verification command
```

### Small UI component (React/Next)

```
PROBLEM: build [component name] with [features]
ENV: Next.js version, TypeScript? Y/N
CONTEXT: paste parent page or UI screenshot link (optional)
WANT: full component file + usage example
```

### Compile / Syntax error

```
PROBLEM: [one-liner]
ENV: Node/TS/Python version
FILE: [paste minimal failing file or snippet]
ERROR: [compiler output]
WANT: fixed file and 1-line cause
```

### Runtime bug (repro steps)

```
PROBLEM: expected [X], actual [Y]
REPRO: 1) steps 2) inputs 3) URL (if any)
CODE: [minimal snippet]
WANT: corrected code + one test step
```

### Dependency conflict

```
PROBLEM: install fails or tests break after upgrade
FILES: package.json / requirements.txt (deps block)
ERROR: [full resolver error]
WANT: pinned versions + install commands
```

### Git fix (merge/conflict/revert)

```
PROBLEM: [e.g., merge conflict in src/foo.tsx]
GIT: paste `git status --porcelain` or `git log --oneline -n 10`
WANT: exact git commands to resolve and final expected state
```

---

## Micro-guidelines for GenZ / noob devs

* Use short lines and emojis to flag things: ✅ for expected, ❌ for error, 📎 for attachments.
* Tell the bot the exact format you want: "Return only the modified file(s) with no extra commentary."
* If you want a step-by-step terminal script, ask: "Give me a 1-click shell script to apply fixes."
* When asking for code, add: "Keep changes minimal and explain in 2 lines."
* If you’re scared of new deps: add `CONSTRAINTS: no new dependencies`.

---

## Team adoption tips (1–2 actions)

1. Put this file at repo root as `AI_PROMPT.md` and pin in README.
2. Add 3 example issues to the repo issues board labeled `prompt-template` so teammates can copy them.
3. Run a 15-min demo in your next standup — show a quick before/after with 1 error fixed.

---

## 3 ready-to-copy examples

1. Next.js build fix

```
PROBLEM: next build fails with "Cannot find module 'some-lib'"
ENV: Node 18, Next 14, npm 10
FILES: package.json (dependencies block)
ERROR: [paste npm ERR! stack here]
WANT: fixed package.json lines + exact npm commands
```

2. ML shape mismatch

```
PROBLEM: PyTorch model expects (batch,128) but input is (batch,127)
ENV: Python 3.10, torch 2.2
SAMPLE: df.head() => shape (1000,127)
CODE: [preprocessing fn]
WANT: fixed preprocessing snippet + verification script
```

3. Small UI feature

```
PROBLEM: Create a Poll component (add/remove options)
CONSTRAINTS: TypeScript, no external state manager
WANT: full component + usage example
```

---

## Final note

This cheatsheet is intentionally tiny. If you want, I can:
• Add a 1-file `AI_PROMPT.md` version for your repo,
• Create a pinned Slack message with the 3 most-used templates, or
• Shorten templates further to single-line prompts for non-technical teammates.

Save as `ai-prompt-manual.md` or `AI_PROMPT.md` in the repo.
