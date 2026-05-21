// Common types used across the application

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Borrower';
  status: 'Active' | 'Inactive' | 'Suspended';
  phone?: string;
  location?: string;
  joinDate: string;
}

export interface Loan {
  id: string;
  borrower: string;
  amount: string;
  type: 'Micro Group Loan' | 'Education Loan' | 'Business Loan';
  status: 'Approved' | 'Pending' | 'Under Review' | 'Rejected';
  date: string;
  purpose?: string;
  groupMembers?: number;
}

export interface Application {
  id: string;
  applicant: string;
  type: 'Micro Group Loan' | 'Education Loan' | 'Business Loan';
  amount: string;
  status: 'Pending Review' | 'Under Review' | 'Approved' | 'Rejected';
  submittedDate: string;
  reviewDate?: string | null;
  purpose: string;
  groupMembers: number;
  priority: 'High' | 'Medium' | 'Low';
}

export interface Organization {
  id: string;
  name: string;
  type: 'Cooperative' | 'Business Network' | 'Agricultural' | 'Youth Group' | 'Artisan Group';
  status: 'Active' | 'Pending' | 'Inactive' | 'Suspended';
  members: number;
  location: string;
  contact: string;
  email: string;
  joinDate: string;
  totalLoans: number;
  activeLoans: number;
  totalAmount: string;
}

export interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface KPIData {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  bgColor: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  error?: string;
}

export interface PaginationParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}