import Contacts from '@/components/contacts';
import AnimationOnScroll from './animation-on-scroll';

export default function AppFooter() {
  return (
    <footer>
      <AnimationOnScroll
        classNameInView="animate-in fade-in slide-in-from-right duration-1000"
        classNameNotInView="opacity-0"
      >
        <div
          id="contacts-section"
          className="container mx-auto p-8 text-center"
        >
          <h2 className="text-2xl">Contact me via</h2>
          <Contacts />
        </div>
      </AnimationOnScroll>
      <div className="container mx-auto text-muted-foreground text-sm flex justify-between p-8">
        <p>maxchu92 | Portfolio v{process.env.version}</p>
        <p className="">&copy;&nbsp;Max Chu&nbsp;{new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
