I actually recommend treating this like a **real software development project**, not "just a website." If you organize it well from the start, you'll always know where you left off, even after a month.

---

# Step 0: Create a Project Folder

Create a folder outside your Documents (or wherever you keep your projects).

```
Portfolio-Website/
```

Open **VS Code** in this folder.

---

# Step 1: Create a Git Repository

Open the VS Code terminal.

```bash
git init
```

Then create a `.gitignore`.

---

# Step 2: Create the Next.js Project

Run:

```bash
npx create-next-app@latest .
```

Answer the prompts like this:

```
Project Name:
.

TypeScript?
Yes

ESLint?
Yes

Tailwind CSS?
Yes

src/ directory?
No

App Router?
Yes

Turbopack?
Yes

Import Alias?
Yes

Alias
@
```

---

# Step 3: Run the Project

```bash
npm run dev
```

Open

```
http://localhost:3000
```

You should see the default Next.js page.

---

# Step 4: First Git Commit

```bash
git add .

git commit -m "Initial Next.js setup"
```

Now you always have a clean starting point.

---

# Step 5: Create a Development Roadmap

Inside your project create

```
docs/
```

Inside it

```
ROADMAP.md
```

This file becomes your project tracker.

Example:

```
Portfolio Website

Phase 1

☐ Install Next.js

☐ Navbar

☐ Hero

☐ Footer

☐ Theme

Phase 2

☐ About

☐ Skills

☐ Timeline

Phase 3

☐ RTL Project

☐ FPGA Project

☐ GEMM

☐ RF Internship

Phase 4

☐ Contact

☐ Resume

☐ SEO

Phase 5

☐ Deploy
```

Whenever you stop working, just tick the completed tasks.

---

# Step 6: Create a Design Folder

```
design/
```

Inside

```
wireframe.png

color-palette.png

fonts.md
```

Later we'll keep all design decisions there.

---

# Step 7: Create an Assets Folder

```
public/

images/

icons/

resume.pdf

videos/
```

Later you'll drop screenshots there.

Example

```
floorplan.png

placement.png

routing.png

gds.png

robot.png

fpga.png
```

---

# Step 8: Create a Data Folder

Instead of hardcoding everything,

create

```
data/
```

Inside

```
projects.ts

skills.ts

experience.ts

social.ts
```

Later the website simply reads from these files.

---

# Step 9: Components Folder

Create

```
components/
```

Inside

```
Navbar.tsx

Hero.tsx

Footer.tsx

ProjectCard.tsx

SkillCard.tsx

Timeline.tsx

SectionTitle.tsx

Button.tsx
```

These are reusable.

---

# Step 10: Pages

Inside

```
app/
```

Create

```
about/

projects/

experience/

contact/

resume/
```

Inside projects

```
rtl-gds/

fpga/

gemm/

robotics/

packet-classifier/

rf-internship/
```

Each page gets its own

```
page.tsx
```

---

# Step 11: Keep a Development Log

Create

```
docs/

LOG.md
```

Example

```
18 July

✓ Installed Next.js

✓ Created folders

✓ Created Navbar

19 July

✓ Finished Hero

✓ Added animations

20 July

✓ Started RTL page
```

This makes it easy to resume work after a break.

---

# Step 12: Create a TODO File

At the project root:

```
TODO.md
```

Example

```
High Priority

□ Homepage

□ About

□ Skills

□ RTL Project

Medium

□ FPGA

□ RF Internship

Low

□ Blog

□ Dark mode

□ Analytics
```

---

# Final Folder Structure

```text
Portfolio-Website/
│
├── app/
│   ├── about/
│   ├── projects/
│   │   ├── rtl-gds/
│   │   ├── fpga/
│   │   ├── gemm/
│   │   ├── robotics/
│   │   ├── packet-classifier/
│   │   └── rf-internship/
│   ├── experience/
│   ├── contact/
│   ├── resume/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── ProjectCard.tsx
│   ├── SkillCard.tsx
│   ├── Timeline.tsx
│   └── SectionTitle.tsx
│
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   ├── experience.ts
│   └── social.ts
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── videos/
│   └── resume.pdf
│
├── docs/
│   ├── ROADMAP.md
│   └── LOG.md
│
├── design/
│   ├── wireframe.png
│   ├── color-palette.png
│   └── fonts.md
│
├── TODO.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## My recommendation

Since you've connected **Codex** in VS Code, we can develop this like a professional project. I'll act as the **project architect**.

We'll proceed in small milestones:

1. ✅ Project setup and folder structure.
2. ✅ Build the navigation bar and homepage.
3. ✅ Create reusable UI components.
4. ✅ Add the About, Skills, and Experience sections.
5. ✅ Build each project page (RTL→GDSII, FPGA, GEMM, etc.).
6. ✅ Polish, optimize, and deploy to Vercel.

After each milestone, you'll make a Git commit, so you can always stop and resume without losing track. This mirrors how software teams manage larger projects.
