import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface DashboardStats {
  totalUsers: number;
  activeTodos: number;
  systemHealth: number;
  monthlyRevenue: number;
}

interface Activity {
  id: number;
  type: 'user' | 'system' | 'todo' | 'backup';
  title: string;
  description: string;
  time: Date;
}

interface SystemService {
  name: string;
  status: 'online' | 'offline' | 'warning';
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  // Dashboard statistics
  stats = signal<DashboardStats>({
    totalUsers: 1247,
    activeTodos: 23,
    systemHealth: 98,
    monthlyRevenue: 45600
  });

  // Recent activity data
  recentActivity = signal<Activity[]>([
    {
      id: 1,
      type: 'user',
      title: 'New user registration',
      description: 'John Doe created an account',
      time: new Date(Date.now() - 1000 * 60 * 30) // 30 minutes ago
    },
    {
      id: 2,
      type: 'todo',
      title: 'Todo completed',
      description: 'Task "Update documentation" marked as complete',
      time: new Date(Date.now() - 1000 * 60 * 60) // 1 hour ago
    },
    {
      id: 3,
      type: 'system',
      title: 'System backup completed',
      description: 'Daily backup successfully created',
      time: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
    },
    {
      id: 4,
      type: 'backup',
      title: 'Cache cleared',
      description: 'Application cache has been cleared',
      time: new Date(Date.now() - 1000 * 60 * 60 * 4) // 4 hours ago
    }
  ]);

  // System services status
  systemServices = signal<SystemService[]>([
    { name: 'Web Server', status: 'online' },
    { name: 'Database', status: 'online' },
    { name: 'Email Service', status: 'online' },
    { name: 'File Storage', status: 'warning' },
    { name: 'Backup Service', status: 'online' }
  ]);

  // Last updated timestamp
  lastUpdated = signal(new Date());

  // Refresh dashboard data
  refreshData(): void {
    // TODO: Implement data refresh logic
    console.log('Refreshing dashboard data...');
    this.lastUpdated.set(new Date());
  }

  // Export dashboard report
  exportReport(): void {
    // TODO: Implement report export
    console.log('Exporting dashboard report...');
  }

  // Create backup
  createBackup(): void {
    // TODO: Implement backup creation
    console.log('Creating backup...');
  }

  // Clear cache
  clearCache(): void {
    // TODO: Implement cache clearing
    console.log('Clearing cache...');
  }

  // View system logs
  viewLogs(): void {
    this.router.navigate(['/admin/logs']);
  }

  // Manage users
  manageUsers(): void {
    this.router.navigate(['/admin/users']);
  }

  // Get activity icon class based on type
  getActivityIconClass(type: Activity['type']): string {
    switch (type) {
      case 'user':
        return 'bg-blue-500';
      case 'todo':
        return 'bg-green-500';
      case 'system':
        return 'bg-purple-500';
      case 'backup':
        return 'bg-orange-500';
      default:
        return 'bg-gray-500';
    }
  }

  // Get activity icon path based on type
  getActivityIcon(type: Activity['type']): string {
    switch (type) {
      case 'user':
        return 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z';
      case 'todo':
        return 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z';
      case 'system':
        return 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z';
      case 'backup':
        return 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';
      default:
        return 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
    }
  }

  // Get status color for system services
  getStatusColor(status: SystemService['status']): string {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'offline':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  }
}
