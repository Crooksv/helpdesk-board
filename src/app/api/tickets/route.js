export async function GET() {
  const tickets = [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-31T14:05:00Z'
    },
    {
      id: 't-1002',
      title: 'Email not syncing on mobile',
      description: 'Outlook app stuck and not receiving new emails.',
      priority: 'Medium',
      status: 'In Progress',
      assignee: 'Casey',
      updatedAt: '2025-10-29T09:22:00Z'
    },
    {
      id: 't-1003',
      title: 'Laptop battery drains quickly',
      description: 'Battery percentage drops from 100% to 20% in one hour.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-21T15:40:00Z'
    },
    {
      id: 't-1004',
      title: 'Printer queue jam in Finance',
      description: 'Jobs stuck in queue; nothing prints.',
      priority: 'Medium',
      status: 'On Hold',
      assignee: 'Taylor',
      updatedAt: '2025-10-18T12:15:00Z'
    },
    {
      id: 't-1005',
      title: 'Zoom microphone not detected',
      description: 'Headset works in Teams but not in Zoom.',
      priority: 'Low',
      status: 'Resolved',
      assignee: 'Sam',
      updatedAt: '2025-10-25T10:05:00Z'
    },
    {
      id: 't-1006',
      title: 'New hire account setup',
      description: 'Create AD, email, and Slack for incoming analyst.',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Riley',
      updatedAt: '2025-10-28T08:30:00Z'
    },
    {
      id: 't-1007',
      title: 'Wi-Fi drops in Conference Room B',
      description: 'Frequent disconnects during calls; only in that room.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-10-30T14:50:00Z'
    },
    {
      id: 't-1008',
      title: 'Password reset request',
      description: 'User locked out after vacation.',
      priority: 'Low',
      status: 'Resolved',
      assignee: 'Casey',
      updatedAt: '2025-10-15T11:00:00Z'
    },
    {
      id: 't-1009',
      title: 'Shared drive permission issue',
      description: 'Marketing cannot write to Q4 Campaigns folder.',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Jordan',
      updatedAt: '2025-10-27T16:20:00Z'
    },
    {
      id: 't-1010',
      title: 'Blue screen on boot',
      description: 'BSOD after Windows update on Dell Latitude 5420.',
      priority: 'Critical',
      status: 'Open',
      assignee: 'Taylor',
      updatedAt: '2025-10-31T07:55:00Z'
    },
    {
      id: 't-1011',
      title: 'login looping',
      description: 'After entering code, redirects back to login.',
      priority: 'High',
      status: 'On Hold',
      assignee: 'Sam',
      updatedAt: '2025-10-26T09:10:00Z'
    },
    {
      id: 't-1012',
      title: 'Chrome crashes on launch',
      description: 'Crashes immediately on start for one user.',
      priority: 'High',
      status: 'In Progress',
      assignee: 'Riley',
      updatedAt: '2025-10-29T17:45:00Z'
    }
  ];
  return Response.json(tickets);
}
