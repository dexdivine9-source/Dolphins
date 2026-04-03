"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div style={{ position: 'relative', width: '40px', height: '40px' }}>
          <Image 
            src="/dolphins-logo.jpg" 
            alt="Dolphins Logo" 
            fill
            style={{ objectFit: 'contain', borderRadius: '8px' }} 
          />
        </div>
        <span>Dolphins</span>
      </div>
      <div className="nav-links">
        <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link href="/booking" className={pathname === '/booking' ? 'active' : ''}>Book Now</Link>
        <Link href="/dashboard" className={pathname === '/dashboard' ? 'active' : ''}>Dashboard</Link>
        <Link href="/booking" className="btn-primary">Book a Lane</Link>
      </div>
    </nav>
  );
}
