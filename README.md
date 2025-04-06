# Supabase Plugin and WeWeb

## Overview
The Supabase plugin for WeWeb enables seamless integration with Supabase's backend services, allowing you to manage authentication, database operations, users, and role-based access control directly from your WeWeb application.

## Table of Contents
- [Installation](#installation)
- [Authentication](#authentication)
- [User Management](#user-management)
- [Role-Based Access Control](#role-based-access-control)
- [Data Operations](#data-operations)
- [Common Integration Patterns](#common-integration-patterns)
- [Troubleshooting](#troubleshooting)

## Installation
1. Navigate to the WeWeb plugin marketplace
2. Search for "Supabase" and click Install
3. Enter your Supabase credentials


### Implementing Authentication Flow
```javascript
// Sign up a new user
supabase.auth.signUp({
  email: 'user@example.com',
  password: 'securepassword'
});

// Sign in existing user
supabase.auth.signIn({
  email: 'user@example.com',
  password: 'securepassword'
});

// Sign out
supabase.auth.signOut();
```

## User Management

### User Profiles
- Automatically creates user profiles in Supabase's `auth.users` table
- Extend with custom fields using WeWeb's interface
- Query and update user data through bindings

### User Session Management
- Access current user data via `supabase.auth.user()`
- Set session persistence in plugin settings
- Track user activity with session metadata

## Role-Based Access Control

### Creating and Managing Roles
1. Define roles in Supabase's SQL editor or database interface
2. Assign default roles for new users
3. Create role hierarchies if needed

### Assigning Roles to Users
```sql
CREATE POLICY "Users can view their own profile"
ON profiles
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
ON profiles
FOR UPDATE
USING (auth.uid() = user_id);
```

### Row-Level Security (RLS)
1. Enable RLS on your tables in Supabase
2. Create policies based on user roles:
   ```sql
   CREATE POLICY "Users can view own data" 
   ON profiles FOR SELECT 
   USING (auth.uid() = user_id);
   ```
3. Test policies with WeWeb's preview mode
---
### Additional Resources
[Supabase Documentation](https://supabase.io)
[Weweb documentation](https://docs.weweb.io)
