# Supabase Plugin and WeWeb

## Overview
The Supabase plugin for WeWeb enables seamless integration with Supabase's backend services, allowing you to manage authentication, database operations, users, and role-based access control directly from your WeWeb application.

My portal has a clean interface, minimalist design and user focused needs, what I develop work as a prototype because it doesn't has all the functionality developed. All the pages follow the Jakob Nielsen's 10 general principles for interaction design.

You can test it with email:jane@jane.com password: JJm.98

Home page: https://bfbcac28-3063-4dbf-9631-8d2d8d3ad868.weweb-preview.io/

Login: https://bfbcac28-3063-4dbf-9631-8d2d8d3ad868.weweb-preview.io/login/

Sign up: https://bfbcac28-3063-4dbf-9631-8d2d8d3ad868.weweb-preview.io/signup/
## Installation
1. Navigate to the WeWeb plugin marketplace
2. Search for "Supabase" and click Install
3. Enter your Supabase credentials

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

### Challenges Faced
Weweb while flexible, there are still limits to what can be customized compared to traditional development, at the same time the application is tied to Weweb's ecosystem. 
In my opinion the platform is great for prototyping, the AI to generate UIs fast than any human can do,using weweb I can spend more time in technical complexities.
For organizations needing to quickly validate ideas before committing development resources, this hybrid approach of low-code with AI-powered is powerfull.

### Additional Resources
[Supabase Documentation](https://supabase.io)
[Weweb documentation](https://docs.weweb.io)
