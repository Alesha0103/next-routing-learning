import Card from '@/src/components/card/card'
import Link from 'next/link';
import React from 'react'

const Notifications = () => {
  return (
    <Card>
      <div>Archived notifications</div>
      <div>
        <Link href="/complex-dashboard">Default</Link>
      </div>
    </Card>
  )
}

export default Notifications;