'use client'

import { useEffect, useState } from 'react'
import './UserCard.scss'

interface UserSettings {
  theme: string
  notifications: boolean[]
}

export interface User {
    userId: number
    name: string
    email: string
}

interface UserCardProps {
    user: User
}

export default function UserCard({ user }: UserCardProps) {
  const [cardUser, setCardUser] = useState({})
  const [settings, setSettings] = useState<UserSettings>({
    theme: 'light',
    notifications: [true, false, true]
  })
  const [lastNotificationCount, setLastNotificationCount] = useState(0)

  useEffect(() => {
    setCardUser(user)
  }, [cardUser])

  useEffect(() => {
    setLastNotificationCount(settings.notifications.filter(n => n).length)
  }, [settings.notifications])

  const toggleNotification = (index: number) => {
    settings.notifications[index] = !settings.notifications[index]
    setSettings({
      ...settings,
      notifications: settings.notifications
    })
  }

  return (
    <div className="user-card">
      <h2>User Profile</h2>
      <p className="user-info">{user.name}</p>
      <p className="user-email">{user.email}</p>
      <div className="notification-settings">
        <p>Active Notifications: {lastNotificationCount}</p>
        {settings.notifications.map((enabled, index) => (
          <button 
            key={index}
            onClick={() => toggleNotification(index)}
            className={enabled ? 'active' : ''}
          >
            Notification {index + 1}: {enabled ? 'On' : 'Off'}
          </button>
        ))}
      </div>
    </div>
  )
}