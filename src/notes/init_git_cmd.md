### Collaborating with Friends on GitHub as the Repo Owner

Since you are the repository owner and have already sent collaboration invitations to your friends via GitHub, they need to accept the invitation and follow these steps to join the project and manage their contributions effectively. As the owner, you’ve granted them collaborator access, allowing them to push changes, create branches, and manage issues. Here’s how they can get started and control their work:

#### Steps for Your Friends to Join and Contribute
1. **Accept the Invitation**:
   - Your friends should have received an email from GitHub with a link to accept the collaborator invitation.
   - They need to log in to GitHub, click the link, and confirm their acceptance. Once accepted, they’ll see the `examiq-qpgs` repository under their GitHub account.

2. **Clone the Repository**:
   - Open a terminal (e.g., Command Prompt, PowerShell, or Git Bash).
   - Navigate to their desired local directory (e.g., `cd C:\Users\TheirName\Projects`).
   - Clone the repo using the URL you provided:
     ```
     git clone https://github.com/Stavan1234/examiq-qpgs.git
     ```
   - This downloads the entire project to a new folder named `examiq-qpgs`.

3. **Install Dependencies**:
   - Navigate into the project folder:
     ```
     cd examiq-qpgs
     ```
   - Install all required Node.js packages:
     ```
     npm install
     ```
   - This ensures they have the same libraries (Next.js, shadcn/ui, etc.) as you.

4. **Set Up Git Identity**:
   - Since this is their local environment, they should configure their Git username and email to track their contributions:
     ```
     git config --global user.name "TheirFullName"
     git config --global user.email "their.email@example.com"
     ```
   - This links their commits to their GitHub account. They can verify with `git config --list`.

5. **Start the Development Server**:
   - Run the app to see the current state:
     ```
     npm run dev
     ```
   - Visit `http://localhost:3000` in their browser to ensure it works.

6. **Create a Feature Branch**:
   - Encourage them to work on separate branches to avoid conflicts:
     ```
     git checkout -b feature/their-task-name
     ```
   - Example: If they’re working on the Create Task page, they could use `feature/create-task`.

7. **Make Changes**:
   - They can edit files (e.g., add components in `src/components/` or pages in `src/app/`).
   - Stage and commit their changes:
     ```
     git add .
     git commit -m "Added [their-task-name] functionality"
     ```

8. **Push Their Branch**:
   - Push their branch to GitHub:
     ```
     git push origin feature/their-task-name
     ```
   - This makes their work visible on GitHub.

9. **Create a Pull Request (PR)**:
   - On GitHub, they should go to the `examiq-qpgs` repo, switch to the “Pull requests” tab, and click “New Pull Request”.
   - Select `feature/their-task-name` as the compare branch and `main` as the base branch.
   - Add a descriptive title and description, then create the PR.
   - You, as the owner, can review and merge it into `main` after testing.

10. **Pull Updates**:
    - To get your latest changes (e.g., after you merge their PR):
      ```
      git checkout main
      git pull origin main
      git checkout feature/their-task-name
      git rebase main
      ```
    - Resolve any conflicts if they arise during rebase.

11. **Collaborate Effectively**:
    - Use GitHub Issues to assign tasks (e.g., “Implement Login Page”).
    - Communicate via PR comments or the repo’s Discussions tab.
    - Regularly pull updates to stay in sync: `git pull origin main`.

#### Controlling Their Work
- **As the Owner**:
  - Monitor PRs and merge only after reviewing code.
  - Use GitHub’s “Protect branch” settings for `main` (e.g., require PRs, pass status checks) to maintain quality.
  - Resolve merge conflicts if needed by pulling their branch locally (`git checkout feature/their-task-name`, `git rebase main`, fix conflicts, `git push`).
- **For Friends**:
  - They can delete their branch after merging: `git push origin --delete feature/their-task-name`.
  - Use `git status` to track changes and `git log` to review history.

### Addressing the Email/Name Confusion in Login Page
The image you provided for the Login Page shows a simple form with "Email" and "Password" fields, but you mentioned uncertainty about entering a name or email. Based on the design:
- The form currently has only "Email" and "Password" inputs, which is standard for a login page. There’s no "Name" field, suggesting this is a login (authentication) page, not a sign-up page.
- The "Enter your email" and "Enter your password" placeholders confirm it’s email-based login.
- If you intended to include a "Name" field (e.g., for sign-up or profile setup), it’s not in the current design. You can add it later if needed:
  - Update `src/app/login/page.tsx` to include a "Name" field before the email input:
    ```tsx
    <div>
      <label className="block text-sm font-medium text-gray-700">Name</label>
      <Input {...register('name')} placeholder="Enter your name" className="mt-1" />
    </div>
    ```
  - However, for now, stick to the image’s design (email/password only) unless you confirm a sign-up requirement.

### Updated Next Steps with Images
The new images align with the previous UI descriptions but clarify details (e.g., "ExamIQ" logo, exact sidebar items, table layout). Here’s how to adjust:
- **Login Page**: Use the "ExamIQ" shield logo (add as an SVG in `public/` and import). The current code in `src/app/login/page.tsx` is accurate; just add the logo.
- **Admin Dashboard**: The sidebar now shows "Dashboard", "Question Bank", "Teachers", "Settings" (no "Exam Tasks" yet, but add it for consistency with Page 4). Update `src/app/dashboard/page.tsx` to match the image’s card and table layout.
- **Create New Exam Task**: The form layout with "Main Details" and "Section Builder" matches; ensure the date picker uses `react-datepicker` for the "Submission Deadline".
- **Final Preview & Generation**: The sidebar includes "Exam Tasks"; update `src/components/common/Sidebar.tsx` accordingly.

Proceed with the "Next Steps" from my previous response, incorporating these image-specific tweaks. Start by committing the current state:
```
git add .
git commit -m "Updated UI designs with new images"
git push
```
Your friends can now clone and begin their tasks. Let me know if they face issues or if you need help with the "Name" field decision!