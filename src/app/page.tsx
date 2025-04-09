import Image from 'next/image';
import styles from './page.module.css';
import React from 'react';
import { Button } from '@publishing/ui/atomic/Button';
// import { Button } from '@company/design-system';

export default function Home() {
  return (
    <main className={styles.main}>
      <Button>test</Button>
    </main>
  );
}
