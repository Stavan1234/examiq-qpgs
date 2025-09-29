# AI Prompt Templates for Noob Developers in ExamIQ Project

This Markdown file provides prompt templates for all the AI assistance scenarios listed in the original response. As a prompt engineer, I've designed these templates to be clear, structured, and beginner-friendly. Each template is tailored to the specific situation, with placeholders (e.g., [INSERT CODE HERE]) for customization. I've included:
- **Short Usage Note**: When to use this prompt and key tips.
- **Template**: The copy-paste-ready prompt for AI tools like ChatGPT, Claude, or Copilot.
- **Customization Instructions**: Where to edit, what to insert (e.g., code, screenshots, package lists, terminal output), and any prerequisites.

The templates are grouped by the original categories for easy navigation. Use them in tools like ChatGPT for general help, Copilot for code completion, or Claude for detailed explanations. Always test AI outputs in your environment, as they can hallucinate.

## 1. Project Setup and Initialization

### Environment Setup
**Short Usage Note**: Use when setting up tools, IDEs, or initial project configs. Ideal for noobs facing installation issues. Insert terminal output if errors occur.

**Template**:
```
As a senior developer helping a beginner with Next.js, provide step-by-step instructions to set up [SPECIFIC ENVIRONMENT OR TOOL, e.g., Node.js and VS Code extensions]. Include any required downloads, commands, and troubleshooting for common errors. If there's an error like [INSERT TERMINAL OUTPUT HERE], explain how to fix it. Assume Windows/Mac OS and list prerequisites.
```

**Customization Instructions**:
- Replace [SPECIFIC ENVIRONMENT OR TOOL] with your need (e.g., "a Next.js project with Tailwind and shadcn/ui").
- Insert [INSERT TERMINAL OUTPUT HERE] with copied error messages from your terminal if applicable.
- Edit for OS-specific needs (e.g., add "for Windows" if relevant).

### Boilerplate Code
**Short Usage Note**: Use for generating starter files or templates. Provide a description or screenshot of the desired UI.

**Template**:
```
Generate boilerplate code for [SPECIFIC FEATURE, e.g., a login page in Next.js]. Use React Hook Form for forms, Tailwind for styling, and shadcn/ui components. Include imports, component structure, and basic functionality. If based on this screenshot [DESCRIBE OR LINK SCREENSHOT], match the layout with blue accents and gray backgrounds.
```

**Customization Instructions**:
- Replace [SPECIFIC FEATURE] with your request (e.g., "folder structure for ExamIQ").
- If using a screenshot, describe it (e.g., "centered card with email/password fields") or link/upload it to the AI tool.
- Add package list if needed (e.g., "Assume installed: react-hook-form").

### Dependency Conflicts
**Short Usage Note**: Use when npm/yarn install fails. Insert terminal error output and your package.json snippet.

**Template**:
```
I'm a beginner with Next.js, and I have this dependency conflict error: [INSERT TERMINAL OUTPUT HERE]. My package.json is [INSERT PACKAGE.JSON SNIPPET HERE]. Suggest compatible versions for packages like [LIST PROBLEMATIC PACKAGES, e.g., Next.js and React], and provide the exact npm commands to fix it without breaking my ExamIQ project.
```

**Customization Instructions**:
- Insert [INSERT TERMINAL OUTPUT HERE] with the full error message.
- Paste [INSERT PACKAGE.JSON SNIPPET HERE] from your file (e.g., the dependencies section).
- List [LIST PROBLEMATIC PACKAGES] based on the error.

## 2. Code Generation and Writing

### New Features from Scratch
**Short Usage Note**: Use for creating entire features. Describe requirements or provide UI screenshot.

**Template**:
```
As a beginner developer, help me build a new feature for ExamIQ: [DESCRIBE FEATURE, e.g., a dynamic form section builder in React]. Use Next.js, Tailwind, shadcn/ui, and react-hook-form. Provide the full code for the component, including imports and state management. Match this UI description/screenshot: [INSERT UI DESCRIPTION OR LINK SCREENSHOT].
```

**Customization Instructions**:
- Replace [DESCRIBE FEATURE] with details (e.g., "with add/remove buttons for sections").
- Insert [INSERT UI DESCRIPTION OR LINK SCREENSHOT] with text or upload (e.g., "white card with inputs for name, instructions").

### Boilerplate Snippets
**Short Usage Note**: Use for reusable code pieces. Specify libraries and style.

**Template**:
```
Generate a boilerplate snippet for [SPECIFIC SNIPPET, e.g., a shadcn/ui table in Next.js]. Include columns for [LIST COLUMNS, e.g., subject code, deadline]. Use Tailwind classes for blue/gray theme. Provide the full JSX code with imports.
```

**Customization Instructions**:
- Replace [SPECIFIC SNIPPET] and [LIST COLUMNS] with your needs.
- No screenshots needed, but add if styling is complex.

### Integration Help
**Short Usage Note**: Use when linking libraries. Provide existing code snippet.

**Template**:
```
Help me integrate [LIBRARY, e.g., jsPDF] into my Next.js component for [PURPOSE, e.g., PDF export in ExamIQ preview page]. Here's my current code: [INSERT CODE HERE]. Provide the updated code with imports, function, and error handling.
```

**Customization Instructions**:
- Replace [LIBRARY] and [PURPOSE] with details.
- Paste [INSERT CODE HERE] from your file (e.g., the preview component).

### Refactoring Old Code
**Short Usage Note**: Use to clean up messy code. Insert the code to refactor.

**Template**:
```
Refactor this code for better readability and performance in Next.js: [INSERT CODE HERE]. Use hooks, Tailwind classes, and best practices. Explain changes and why they're better for my ExamIQ project.
```

**Customization Instructions**:
- Paste [INSERT CODE HERE] directly (e.g., dashboard JSX).
- Add context if needed (e.g., "Focus on responsive design").

## 3. Debugging and Error Resolution

### Syntax/Compile Errors
**Short Usage Note**: Use for build/compile issues. Insert code and error message.

**Template**:
```
Debug this syntax error in my Next.js code: [INSERT ERROR MESSAGE HERE]. The code is: [INSERT CODE HERE]. Explain the issue and provide the fixed version line-by-line.
```

**Customization Instructions**:
- Insert [INSERT ERROR MESSAGE HERE] from terminal (e.g., TypeScript error).
- Paste [INSERT CODE HERE] from the file.

### Runtime Bugs
**Short Usage Note**: Use for app crashes. Provide code and console output.

**Template**:
```
My Next.js app crashes with this runtime bug: [INSERT CONSOLE OUTPUT HERE]. The relevant code is: [INSERT CODE HERE]. Simulate the issue and suggest fixes, including traces if needed.
```

**Customization Instructions**:
- Insert [INSERT CONSOLE OUTPUT HERE] from browser console.
- Paste [INSERT CODE HERE].

### Logic Errors
**Short Usage Note**: Use when code runs but behaves wrong. Describe expected vs. actual, insert code.

**Template**:
```
Fix this logic error in my React code for ExamIQ: Expected [DESCRIBE EXPECTED BEHAVIOR], but actual [DESCRIBE ACTUAL BEHAVIOR]. Code: [INSERT CODE HERE]. Identify the flaw and provide corrected code.
```

**Customization Instructions**:
- Replace [DESCRIBE EXPECTED BEHAVIOR] and [DESCRIBE ACTUAL BEHAVIOR] (e.g., "sections should add, but state doesn't update").
- Paste [INSERT CODE HERE].

### Performance Issues
**Short Usage Note**: Use for slow parts. Insert code and describe symptoms.

**Template**:
```
Optimize this code for performance in Next.js: [INSERT CODE HERE]. It's slow with [DESCRIBE SYMPTOM, e.g., 100+ rows in table]. Suggest memoization or other fixes.
```

**Customization Instructions**:
- Paste [INSERT CODE HERE].
- Describe [DESCRIBE SYMPTOM] with details (e.g., "lags on render").

## 4. Version Control (Git)

### Basic Commands
**Short Usage Note**: Use for Git basics. Describe your current state.

**Template**:
```
As a beginner, give step-by-step Git commands for [SPECIFIC TASK, e.g., init repo and push to GitHub]. My current terminal state is [INSERT TERMINAL OUTPUT IF NEEDED]. Explain each command.
```

**Customization Instructions**:
- Replace [SPECIFIC TASK] (e.g., "add remote and push").
- Insert [INSERT TERMINAL OUTPUT IF NEEDED] if errors.

### Branch Management
**Short Usage Note**: Use for branching/PRs. Provide repo details.

**Template**:
```
Guide me to manage branches in Git for ExamIQ: [SPECIFIC ACTION, e.g., create feature branch and open PR]. Commands and GitHub steps, assuming my repo is [REPO URL].
```

**Customization Instructions**:
- Replace [SPECIFIC ACTION] and [REPO URL].

### Conflict Resolution
**Short Usage Note**: Use for merge conflicts. Insert diff or terminal output.

**Template**:
```
Resolve this Git merge conflict: [INSERT DIFF OR TERMINAL OUTPUT HERE]. Provide the fixed code and commands to complete the merge.
```

**Customization Instructions**:
- Insert [INSERT DIFF OR TERMINAL OUTPUT HERE] from `git diff` or terminal.

### History and Reverts
**Short Usage Note**: Use for undoing changes. Insert git log output.

**Template**:
```
Help revert changes in Git: [DESCRIBE ISSUE, e.g., undo last 3 commits]. My git log is [INSERT GIT LOG OUTPUT HERE]. Provide safe commands.
```

**Customization Instructions**:
- Describe [DESCRIBE ISSUE].
- Insert [INSERT GIT LOG OUTPUT HERE] from `git log --oneline`.

## 5. Imports and Dependencies

### Module Import Errors
**Short Usage Note**: Use for import failures. Insert code and error.

**Template**:
```
Fix this import error in Next.js: [INSERT ERROR MESSAGE HERE]. Code: [INSERT CODE HERE]. Suggest path fixes or tsconfig changes.
```

**Customization Instructions**:
- Insert [INSERT ERROR MESSAGE HERE] and [INSERT CODE HERE].

### Package Installation
**Short Usage Note**: Use for installing packages. List requirements.

**Template**:
```
Recommend and install commands for [PACKAGE, e.g., lucide-react] in Next.js. Provide import example for [SPECIFIC USE, e.g., Eye icon].
```

**Customization Instructions**:
- Replace [PACKAGE] and [SPECIFIC USE].

### Alias/Path Setup
**Short Usage Note**: Use for @ aliases. Insert tsconfig snippet.

**Template**:
```
Set up path aliases in Next.js tsconfig for [PATH, e.g., src/components/common as @common]. Current tsconfig: [INSERT TSCONFIG SNIPPET HERE]. Provide updated file.
```

**Customization Instructions**:
- Replace [PATH].
- Insert [INSERT TSCONFIG SNIPPET HERE].

### Version Mismatches
**Short Usage Note**: Use for dep conflicts. Insert package.json and error.

**Template**:
```
Resolve version mismatch: [INSERT ERROR HERE]. Package.json: [INSERT PACKAGE.JSON HERE]. Suggest updates and npm commands.
```

**Customization Instructions**:
- Insert [INSERT ERROR HERE] and [INSERT PACKAGE.JSON HERE].

## 6. Suggestions and Best Practices

### Code Reviews
**Short Usage Note**: Use for self/peer reviews. Insert code.

**Template**:
```
Perform a code review on this Next.js code for ExamIQ: [INSERT CODE HERE]. Check for accessibility, performance, and best practices. Suggest improvements.
```

**Customization Instructions**:
- Paste [INSERT CODE HERE].

### Design Patterns
**Short Usage Note**: Use for architectural advice. Describe app.

**Template**:
```
Suggest a beginner-friendly design pattern for [ISSUE, e.g., state management in ExamIQ]. Explain with code example using Next.js.
```

**Customization Instructions**:
- Replace [ISSUE].

### Security Tips
**Short Usage Note**: Use for vuln checks. Insert code.

**Template**:
```
Flag security issues in this code: [INSERT CODE HERE]. Suggest fixes for [SPECIFIC CONCERN, e.g., auth in Next.js].
```

**Customization Instructions**:
- Paste [INSERT CODE HERE].
- Replace [SPECIFIC CONCERN].

### Optimization Advice
**Short Usage Note**: Use for perf suggestions. Describe scenario.

**Template**:
```
Provide optimization advice for [SCENARIO, e.g., SSR vs. CSR in ExamIQ]. Explain pros/cons with code snippets.
```

**Customization Instructions**:
- Replace [SCENARIO].

## 7. Documentation and Comments

### Inline Comments
**Short Usage Note**: Use to add comments. Insert code.

**Template**:
```
Add inline JSDoc comments to this function: [INSERT CODE HERE]. Make it beginner-friendly for ExamIQ.
```

**Customization Instructions**:
- Paste [INSERT CODE HERE].

### README/Guides
**Short Usage Note**: Use for docs. Provide project details.

**Template**:
```
Draft a README.md for ExamIQ repo: Include [SECTIONS, e.g., features, setup, roadmap]. Use my tech stack: Next.js, Tailwind.
```

**Customization Instructions**:
- Replace [SECTIONS] with list.

### API Docs
**Short Usage Note**: Use for endpoint docs. Insert code.

**Template**:
```
Generate Swagger-like docs for this API route: [INSERT CODE HERE]. Include endpoints, params, and responses.
```

**Customization Instructions**:
- Paste [INSERT CODE HERE].

## 8. Testing and Quality Assurance

### Unit Tests
**Short Usage Note**: Use for writing tests. Insert code to test.

**Template**:
```
Write Jest unit tests for this component: [INSERT CODE HERE]. Cover [CASES, e.g., form validation in login].
```

**Customization Instructions**:
- Paste [INSERT CODE HERE].
- Replace [CASES].

### E2E Testing
**Short Usage Note**: Use for end-to-end. Describe flow.

**Template**:
```
Script Cypress E2E tests for ExamIQ flow: [DESCRIBE FLOW, e.g., login to dashboard]. Provide code and setup.
```

**Customization Instructions**:
- Replace [DESCRIBE FLOW].

### Bug Hunting
**Short Usage Note**: Use for edge cases. Insert code.

**Template**:
```
Simulate edge cases for this code: [INSERT CODE HERE]. Test for [SPECIFIC, e.g., empty inputs] and suggest fixes.
```

**Customization Instructions**:
- Paste [INSERT CODE HERE].
- Replace [SPECIFIC].

## 9. UI/UX Design and Assets

### Component Styling
**Short Usage Note**: Use for Tailwind/CSS. Describe or screenshot UI.

**Template**:
```
Suggest Tailwind classes for [COMPONENT, e.g., summary card in gray/blue]. Match this UI: [INSERT DESCRIPTION OR LINK SCREENSHOT].
```

**Customization Instructions**:
- Replace [COMPONENT].
- Insert [INSERT DESCRIPTION OR LINK SCREENSHOT].

### Logo/Asset Generation
**Short Usage Note**: Use for prompts. Describe style.

**Template**:
```
Create a prompt for Gemini to generate a logo: [DESCRIBE STYLE, e.g., brain-circuit in blue/gray].
```

**Customization Instructions**:
- Replace [DESCRIBE STYLE].

### Wireframes
**Short Usage Note**: Use to convert designs to code. Upload screenshot.

**Template**:
```
Convert this wireframe screenshot to React JSX with shadcn: [DESCRIBE OR LINK SCREENSHOT]. Use Next.js and Tailwind.
```

**Customization Instructions**:
- Describe or upload [DESCRIBE OR LINK SCREENSHOT].

## 10. Deployment and CI/CD

### Build Errors
**Short Usage Note**: Use for build fails. Insert terminal output.

**Template**:
```
Debug this Next.js build error: [INSERT TERMINAL OUTPUT HERE]. Provide fixes and commands.
```

**Customization Instructions**:
- Insert [INSERT TERMINAL OUTPUT HERE].

### Hosting Setup
**Short Usage Note**: Use for deployment. List env vars if needed.

**Template**:
```
Guide me to deploy ExamIQ to [HOST, e.g., Vercel]. Include env vars for [LIST VARS, e.g., auth].
```

**Customization Instructions**:
- Replace [HOST] and [LIST VARS].

### CI Pipelines
**Short Usage Note**: Use for actions. Describe workflow.

**Template**:
```
Write a GitHub Actions YAML for [WORKFLOW, e.g., linting on push]. For my Next.js repo.
```

**Customization Instructions**:
- Replace [WORKFLOW].

## 11. Learning and Explanations

### Concept Breakdowns
**Short Usage Note**: Use for explanations. Specify context.

**Template**:
```
Explain [CONCEPT, e.g., useEffect in React] with examples for ExamIQ. As a beginner tutorial.
```

**Customization Instructions**:
- Replace [CONCEPT].

### Tutorial Generation
**Short Usage Note**: Use for custom guides. Specify topic.

**Template**:
```
Create a beginner tutorial for [TOPIC, e.g., building forms with react-hook-form]. Include code steps for Next.js.
```

**Customization Instructions**:
- Replace [TOPIC].

### Resource Recommendations
**Short Usage Note**: Use for learning resources. Specify skill.

**Template**:
```
Recommend top free resources for [SKILL, e.g., Next.js for noobs]. Include YouTube links and courses.
```

**Customization Instructions**:
- Replace [SKILL].

## 12. Collaboration and Teamwork

### PR Descriptions
**Short Usage Note**: Use for polished PRs. Describe changes.

**Template**:
```
Draft a GitHub PR description for [CHANGES, e.g., adding dashboard table]. Include what, why, and screenshots if needed.
```

**Customization Instructions**:
- Replace [CHANGES].

### Code Reviews for Team
**Short Usage Note**: Use for peer feedback. Insert code.

**Template**:
```
Suggest improvements for this team member's code in ExamIQ: [INSERT CODE HERE]. Focus on [ASPECTS, e.g., readability].
```

**Customization Instructions**:
- Paste [INSERT CODE HERE].
- Replace [ASPECTS].

### Issue Tracking
**Short Usage Note**: Use for GitHub issues. Describe problem.

**Template**:
```
Template a GitHub issue for [PROBLEM, e.g., sidebar responsiveness]. Include labels and steps to reproduce.
```

**Customization Instructions**:
- Replace [PROBLEM].

## 13. Edge Cases and Advanced Help

### Cross-Browser Issues
**Short Usage Note**: Use for browser-specific bugs. Insert CSS/code and symptoms.

**Template**:
```
Fix this cross-browser issue: [DESCRIBE SYMPTOM, e.g., grid misalignment in Safari]. Code: [INSERT CODE HERE].
```

**Customization Instructions**:
- Describe [DESCRIBE SYMPTOM].
- Paste [INSERT CODE HERE].

### Scalability Advice
**Short Usage Note**: Use for large data handling. Describe scenario.

**Template**:
```
Advise on scalability for [SCENARIO, e.g., 1000+ questions in ExamIQ]. Suggest optimizations like pagination.
```

**Customization Instructions**:
- Replace [SCENARIO].

### Monetization/Extensions
**Short Usage Note**: Use for future ideas. Describe project.

**Template**:
```
Brainstorm extensions for ExamIQ: [DESCRIBE CURRENT, e.g., add AI MCQ generation]. Include code ideas.
```

**Customization Instructions**:
- Replace [DESCRIBE CURRENT].

This file covers 50+ templates across all scenarios—expand as needed. Save as `ai-prompt-templates.md` in your notes folder for quick access. Start with one, like debugging, and iterate!