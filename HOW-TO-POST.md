# How to run your travel blog — the simple guide

This guide assumes zero technical background. Every day-to-day task happens in
a normal web browser (your phone works fine). You never need to touch code.

Your blog's address: **https://rntschlr.github.io/travel-blog/**

---

## One-time setup (about 10 minutes, do this once)

### A. Connect the editor (Pages CMS)

Pages CMS is the "control panel" for your blog. It's free.

1. Go to **https://app.pagescms.org** in your browser.
2. Click **Sign in with GitHub** and log in with your GitHub account
   (the `rntschlr` one).
3. GitHub will ask if Pages CMS may access your repositories — a
   "repository" is just GitHub's word for a project's folder of files, and
   your blog is one. Approve it; if you're offered "Only select
   repositories", you can pick just **travel-blog**.
4. Back in Pages CMS, pick the **travel-blog** repository from the list.
5. That's it. You'll see a menu that includes **Blog posts**,
   **Gallery photos**, and **Site settings** (plus a couple of extras like
   **Media** — you can ignore those). Bookmark this page — it's your blog's
   front door.

### B. Create your mailing list (Buttondown)

Buttondown collects email addresses and sends your posts to subscribers.
Free for your first 100 subscribers.

1. Go to **https://buttondown.com** and click **Sign up** (Claude can't
   create accounts on your behalf — this one's you).
2. Pick a username — this becomes part of your newsletter address, so
   something like `jacktravels` works nicely.
3. Once you're in, tell Claude your username (or do it yourself: open
   **Site settings** in Pages CMS, type the username into
   **Buttondown username**, and press **Save**). The subscribe boxes on the
   blog switch on automatically once that's filled in.

**What's free vs. paid, honestly:** the free plan holds your subscriber list
and lets you send emails manually (see "Telling subscribers" below — it takes
about two minutes per post). If you ever want posts to email themselves out
automatically, that's Buttondown's "RSS-to-email" add-on at **$9/month**.
Skip it until sending manually annoys you.

---

## Writing a new post (2 minutes + your story)

1. Open Pages CMS (the bookmark from step A).
2. Click **Blog posts** → **Add an entry** (on a phone it's the **+**
   button, top right).
3. Fill in the boxes:
   - **Title** — e.g. "Three days in Lisbon"
   - **Publish date** — today (it sorts the blog, newest first)
   - **Short summary** — one sentence; this shows on the homepage
   - **Cover photo** — optional; click it to upload a photo from your
     phone/computer
   - **Location** — optional, e.g. "Lisbon, Portugal"
   - **Tags** — optional. One word or phrase per box (e.g. "portugal");
     press **Add an item** to add another (e.g. "food")
   - **Your story** — the post itself. The toolbar has bold, headings, and an
     image button for photos *inside* the story.
4. Click **Save** (on a phone it's the small disk icon, top right).
5. Wait 2–3 minutes. GitHub rebuilds the site automatically. Refresh your
   blog and the post is live. Nothing else to do.

## Adding photos to the gallery (1 minute each)

1. In Pages CMS, click **Gallery photos** → **Add an entry** (the **+**
   button on a phone).
2. **Photo** — upload the picture.
3. **What is in the photo?** — a few words ("Sunset over the Danube").
   This is what screen readers and search engines see.
4. **Where was this taken?** / **Caption** / **Date taken** — all optional.
   **Date taken** decides the gallery order (newest first); if you leave it
   empty, the day you uploaded the photo is used instead.
5. **Save.** Same deal: live in 2–3 minutes, newest photos first.

**Tip:** phone photos can be huge. If the gallery starts feeling slow,
use your phone's "resize" share option (or any free online resizer) and aim
for under ~1 MB per photo. Not required — just keeps things snappy.

## Telling subscribers about a new post (2 minutes)

The free way, after you publish a post:

1. Go to **https://buttondown.com** and log in.
2. Open the **Emails** section and click the **New** button (top right).
3. Type your post's title as the subject, write a line or two, and paste the
   post's link (open the post on your blog and copy the address bar).
4. Click **Publish** (top right). A summary panel appears — check it looks
   right, then click **Publish** again. Everyone on your list gets it.

## Changing the blog's name or description

Pages CMS → **Site settings** → edit **Blog name** or **Blog description**
→ **Save**. The whole site updates itself.

---

## If something looks wrong

- **My post isn't showing up.** Give it 3 minutes, then refresh the page —
  on a computer press Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows); on a
  phone, close the tab and open the blog fresh. Still missing after 5
  minutes? The automatic rebuild may have hiccuped — open the post in Pages
  CMS, make a tiny edit (add a space at the end of your story), and press
  **Save** to trigger a fresh build.
- **A photo looks broken.** Open the entry in Pages CMS and re-upload the
  photo — the most common cause is a canceled upload.
- **The subscribe box says "coming soon".** The **Buttondown username** in
  Site settings is empty or misspelled. It must match your Buttondown
  username exactly, no spaces.
- **Anything else.** Nothing you do in Pages CMS can permanently break the
  site — every change is saved as history in GitHub, so everything can be
  rolled back. Just describe what happened to Claude (or a nearby nerd) and
  it's fixable.

## Later, when you pick a real domain

The blog currently lives at the GitHub address above. When you decide on its
own domain (e.g. `wherever-jack-is.com`, ~$10/year), it's a 10-minute change:
buy the domain, point it at GitHub Pages, and update a few settings in the code.
Everything you've posted comes along untouched — ask Claude when you're ready.
