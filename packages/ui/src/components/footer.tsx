/* @refresh reload */
import { Component, For } from 'solid-js';
import { noShadowDOM } from 'component-register';

const organizations = [
  {
    name: 'WeVis',
    logo: '/static/images/logo-wevis.png',
    href: 'https://wevis.info',
  },
  {
    name: 'The Standard',
    logo: '/static/images/logo-tsd.png',
    href: 'https://thestandard.co/',
  },
  {
    name: 'Wisesight',
    logo: '/static/images/logo-wisesight.png',
    href: 'https://wisesight.com/',
  },
];

const links = [
  { label: 'ข้อมูลผู้สมัคร', href: '/candidate' },
  // { label: 'ประวัติการลงคะแนน', href: '#' },
  // { label: 'เลือกอย่างไร?', href: '#' },
  { label: 'เกี่ยวกับเว็บไซต์นี้', href: '/about' },
];

const Footer: Component = () => {
  noShadowDOM();

  return (
    <div class="ui-bg-black ui-text-white ui-flex ui-justify-center">
      <div class="ui-flex ui-flex-row ui-w-full ui-max-w-screen-xl ui-m-6 md:ui-m-8 ui-space-x-4">
        <div className="ui-flex-1 ui-flex ui-flex-col md:ui-flex-row ui-gap-6">
          <For each={organizations}>
            {({ name, logo, href }) => (
              <a href={href} target="_blank">
                <img src={logo} alt={name} class="ui-h-6 md:ui-h-8" />
              </a>
            )}
          </For>
        </div>
        <div className="ui-flex-1 ui-grid ui-grid-cols-1 md:ui-grid-cols-3 ui-gap-2">
          <span class="typo-u5 ui-font-bold md:ui-col-span-3">Links</span>
          <For each={links}>
            {({ label, href }) => (
              <a href={href} target="_blank" class="typo-u4 ui-underline">
                {label}
              </a>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

export default Footer;
