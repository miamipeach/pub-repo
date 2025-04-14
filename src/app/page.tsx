import styles from './page.module.css';
import React from 'react';
import { Button } from '@publishing/ui/atomic/Button';
import DefaultLayout from '@publishing/ui/layouts/default';

export default function Home() {
  return (
    <DefaultLayout>
      <main className={styles.main}></main>
    </DefaultLayout>
  );
}
