# Celeste Johnson for Utah House District 59

A modern, responsive campaign website for Celeste Johnson, former Mayor of Midway, Utah, running for Utah State House District 59.

## Features

- **Modern Design**: Clean, approachable aesthetic with rounded corners, gentle shadows, and the campaign's blue/red/white branding
- **Fully Responsive**: Mobile-first design that works beautifully on phones, tablets, and desktop
- **Six Main Pages**:
  - Homepage with hero, introduction, priorities, and newsletter signup
  - About page with full biography and accomplishments
  - Issues page with detailed policy positions
  - Endorsements page with testimonials
  - Newsroom with media coverage
  - Contact page with form and campaign information
- **Reusable Components**: Modular architecture for easy maintenance and updates
- **Accessible**: Built with semantic HTML and ARIA labels for screen readers
- **Fast Performance**: Static generation with Next.js 14 for lightning-fast page loads

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom campaign theme
- **Icons**: React Icons
- **Deployment Ready**: Optimized for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd celeste-johnson-campaign
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

To test the production build locally:

```bash
npm start
```

## Project Structure

```
celeste-johnson-campaign/
├── app/                      # Next.js 14 App Router pages
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Homepage
│   ├── about/page.tsx       # About page
│   ├── issues/page.tsx      # Issues page
│   ├── endorsements/page.tsx # Endorsements page
│   ├── newsroom/page.tsx    # Newsroom page
│   └── contact/page.tsx     # Contact page
├── components/              # Reusable React components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Homepage hero section
│   ├── IssueCard.tsx        # Issue display component
│   ├── NewsItem.tsx         # News article component
│   ├── TestimonialCard.tsx  # Testimonial component
│   ├── PriorityCard.tsx     # Priority preview card
│   ├── ContactForm.tsx      # Contact form
│   └── NewsletterSignup.tsx # Newsletter signup form
├── public/                  # Static assets
│   ├── campaign-logo.png    # Campaign logo
│   └── images/              # Additional images
└── app/globals.css          # Global styles & Tailwind config
```

## Customization

### Colors

The campaign colors are defined in `app/globals.css`:

- **Primary Blue**: `#2B5A9E`
- **Primary Red**: `#C8374B`
- **Neutral Grays**: Multiple shades for text and backgrounds

To customize, edit the CSS variables in the `:root` section of `globals.css`.

### Content

Content can be updated by editing the respective page files in the `app/` directory. All text is hardcoded for easy modification without a CMS.

### Forms

The contact form and newsletter signup are currently frontend-only. To enable backend functionality:

1. Add API routes in `app/api/`
2. Integrate with email services (Mailchimp, SendGrid, etc.)
3. Update form components to call your API endpoints

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository at [vercel.com](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build

### Netlify

1. Push your code to GitHub
2. Connect your repository at [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Other Platforms

This site can be deployed to any platform that supports Next.js static exports.

## Future Enhancements

- Backend API for form submissions
- Email service integration for newsletter
- Content Management System (CMS)
- Analytics integration
- Blog/news section
- Event calendar
- Volunteer portal
- Donation processing

## Campaign Information

**Celeste Johnson for Utah House District 59**
- Website: [Coming Soon]
- Email: contact@celestefordistrict59.com
- District: Midway, Heber City, Charleston, Daniel, and surrounding areas in Wasatch County

## License

This website was built for the Celeste Johnson campaign. All rights reserved.

---

**Paid for by Celeste Johnson for House District 59**
