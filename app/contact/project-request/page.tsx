import type { NextPage } from 'next';

import styles from '../../../styles/Request.module.scss';

const Page: NextPage = () => {
  return (
    <div className={styles.request__container}>
      <div className={styles.request__wrapper}>
        <div className={styles.form__container}>
          <form className={styles.form}>
            <div className={styles.form__group}>
              <label htmlFor='name'>Full name</label>
              <input type='text' id='name' name='name' placeholder='John Doe' />
            </div>
            <div className={styles.form__group}>
              <label htmlFor='email'>Email</label>
              <input type='email' id='email' name='email' placeholder='john.doe@example.com' />
            </div>
            <div className={styles.form__group}>
              <label htmlFor='name'>Position and Company</label>
              <div>
                <input type='text' id='name' name='name' placeholder='CEO' />
                <p>at</p>
                <input type='text' id='name' name='name' placeholder='Apple' />
              </div>
            </div>
            <div className={styles.form__group}>
              <label htmlFor='budget'>Budget</label>
              <input type='text' id='budget' name='budget' placeholder='3000 - 5000€' />
            </div>
            <div className={styles.form__group}>
              <label htmlFor='description'>Project Description</label>
              <textarea name='description' id='description' cursor-ix='true' placeholder='Tell me more about your project. Please include details like goals, timeline, and design links if available.'>
              </textarea>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;