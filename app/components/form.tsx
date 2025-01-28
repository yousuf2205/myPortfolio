// components/ClientForm.tsx
'use client';

import { useState } from 'react';
import styles from  './form.module.css'
import Link from 'next/link';
import Image from 'next/image';

export default function ClientForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phonenumber: '',
        subject: '',
        textarea: '',
      });
      const [message, setMessage] = useState('');
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value } = e.target;
    
        if (name === 'phonenumber') {
          setFormData({ ...formData, [name]: value.replace(/[^0-9]/g, '') });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage('');
    
        try {
          const response = await fetch('/api/submit-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              ...formData,
              phonenumber: Number(formData.phonenumber),
            }),
          });
    
          if (response.ok) {
            setMessage('Form submitted successfully!');
            setFormData({ name: '', email: '', phonenumber: '', subject: '', textarea: '' });
          } else {
            setMessage('Failed to submit the form.');
          }
        } catch (error) {
          console.error('Error submitting the form:', error);
          setMessage('An error occurred.');
        }
      };
  return (
    <section className={styles.section} id='contact'>
        <div className='container'>
        <h2 className={styles.formh2}>Contact</h2>
            <div className={styles.formMain}>
                        <div className={styles.form}>
                                    <form onSubmit={handleSubmit} className={styles.formInner}>
                                    <div className={styles.inputGroup}>
                                    <input
                                     type="text"
                                     name="name"
                                     className={styles.input}
                                     value={formData.name}
                                     onChange={handleChange}
                                     required
                                      />
                                    <label className={styles.userLabel}>Name</label>
                                    </div>
                                    <div className={styles.inputGroup}>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                      />
                                    <label className={styles.userLabel}>Email</label>
                                    </div>
                                    <div className={styles.inputGroup}>
                                    <input
                                        type="number"
                                        name="phonenumber"
                                        value={formData.phonenumber}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                      />
                                    <label className={styles.userLabel}>Phone</label>
                                    </div>
                                    <div className={styles.inputGroup}>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                      />
                                    <label className={styles.userLabel}>Subject</label>
                                    </div>
                                    <h3 className={styles.formh3}>Tell me about your project</h3>
                                    <div className={styles.inputGroup}>
                                    <textarea
                                        
                                        name="textarea"
                                        value={formData.textarea}
                                        onChange={handleChange}
                                        required
                                        className={styles.input}
                                      />
                                    <label className={styles.userLabel}>Message</label>
                                    </div>
                                    <div className={styles.btn}>
                                    <button type="submit">
                                        <span> Submit
                                        </span>
                                        </button>
                                    </div>
                                </form>
                                {message && <p className={styles.message}>{message}</p>}
                        </div>

                        <div className={styles.contact}>
                            <h2>Let&apos;s chat</h2>
                            <h3>Tell me about your project</h3>
                            <div className={styles.emailBox}>
                                <div className={styles.EmailIcon}>
                                    <Image
                                    src='/mail.svg'
                                    alt='mail'
                                    width={30}
                                    height={30}
                                     />
                                </div>
                                <div>
                                <h3 className={styles.emailh3}>Mail At</h3>
                                <h4><Link href='mailto:yousuf1954321@gmail.com'>yousuf1954321@gmail.com</Link></h4>
                                </div>
                                
                            </div>
                        </div>
           
            </div>

    </div>
    </section>
   
  );
}
