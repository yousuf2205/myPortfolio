declare module 'react-typewriter-effect' {
    interface TypewriterEffectProps {
      textStyle?: React.CSSProperties;
      startDelay?: number;
      cursorColor?: string;
      multiText: string[];
      multiTextDelay?: number;
      typeSpeed?: number;
      onTypingEnd?: () => void;
      wrapperClassName?: string;
    }
  
    const TypewriterEffect: React.FC<TypewriterEffectProps>;
    export default TypewriterEffect;
  }