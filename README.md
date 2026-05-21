# Alleja Microfinance Admin Dashboard

A modern, responsive admin dashboard built with Next.js 15, TypeScript, and Tailwind CSS for managing microfinance operations.

## 🚀 Features

- **Modern Tech Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Admin Dashboard**: Complete admin interface with sidebar navigation
- **User Management**: Manage users, roles, and permissions
- **Loan Management**: Handle loan applications and approvals
- **Analytics**: Comprehensive analytics and reporting
- **Organizations**: Manage partner organizations and groups
- **Responsive Design**: Mobile-first responsive design
- **Authentication**: Secure login and user management

## 📁 Project Structure

```
alleja-admin/
├── docs/                    # Documentation
├── public/                  # Static assets
│   ├── icons/              # Icon files
│   ├── images/             # Image assets
│   └── ...                 # Other static files
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── admin/          # Admin routes
│   │   ├── auth/           # Authentication routes
│   │   └── ...
│   ├── components/         # React components
│   │   ├── admin/          # Admin-specific components
│   │   ├── ui/             # Reusable UI components
│   │   └── ...
│   ├── constants/          # Application constants
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── services/           # API services
│   ├── store/              # State management
│   ├── styles/             # Global styles
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **State Management**: React Hooks + Context
- **HTTP Client**: Fetch API with custom wrapper
- **Development**: ESLint, Prettier

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd alleja-admin
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment variables:
```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🏗️ Architecture

### Components

- **AdminLayout**: Reusable layout with sidebar and header
- **Sidebar**: Collapsible navigation sidebar
- **Header**: Top navigation with search and user menu
- **UI Components**: Reusable components (Button, Card, etc.)

### Services

- **API Client**: Centralized HTTP client with authentication
- **Auth Service**: Authentication and user management
- **Data Services**: CRUD operations for different entities

### Hooks

- **useLocalStorage**: Persistent local storage state
- **useDebounce**: Debounced values for search
- **usePagination**: Pagination logic

### Utils

- **Formatting**: Currency, date, and text formatting
- **Validation**: Email, phone, and form validation
- **Helpers**: Common utility functions

## 🔐 Authentication

The application uses JWT-based authentication with:

- Login/logout functionality
- Token refresh mechanism
- Protected routes
- Role-based access control

## 📱 Responsive Design

The dashboard is fully responsive with:

- Mobile-first approach
- Collapsible sidebar on mobile
- Responsive tables and cards
- Touch-friendly interactions

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Styled with Tailwind utilities
- **Dark Mode**: Ready for dark mode implementation
- **Consistent Design**: Design system with reusable components

## 📊 Features Overview

### Dashboard
- Key performance indicators (KPIs)
- Recent activities
- Quick actions
- Analytics overview

### User Management
- User listing with search and filters
- Role management
- Status updates
- User profiles

### Loan Management
- Loan applications
- Approval workflow
- Status tracking
- Payment history

### Analytics
- Revenue analytics
- User growth metrics
- Loan performance
- Regional distribution

### Organizations
- Partner organizations
- Member management
- Organization profiles
- Activity tracking

## 🔧 Configuration

### Environment Variables

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_APP_NAME=Alleja Microfinance
```

### Tailwind Configuration

The project uses Tailwind CSS with custom configuration for:
- Custom colors
- Typography scale
- Spacing system
- Component variants

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation in the `docs/` folder