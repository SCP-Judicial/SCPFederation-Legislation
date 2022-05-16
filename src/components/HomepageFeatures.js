import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Supreme Guidelines',
    img: '/img/scpf.png',
    href: '/supreme/introduction',
    description: (
      <>
        View the Foundation's Supreme Guidelines.
      </>
    ),
  },
  {
    title: 'Departmental Guidelines',
    img: '/img/department.png',
    href: '/departments',
    description: (
      <>
        All public departmental guidelines are available to view here.
      </>
    ),
  },
  {
    title: <>Foundation Code <span class="badge badge--info">New</span></>,
    img: '/img/FLC.png',
    href: '/foundation_code',
    description: (
      <>
        View the Foundation's Legal Code.
      </>
    ),
  },
];

function Feature({img, href, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center" >
      <a href={href}><img src={img} alt={title} className={styles.featureSvg} /></a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
