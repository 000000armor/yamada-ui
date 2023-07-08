import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Center, Motion, MotionVariants } from '@yamada-ui/react'
import { useMemo } from 'react'

export default {
  title: 'Components / Motion / Transition',
  component: Motion,
} as ComponentMeta<typeof Motion>

export const basic: ComponentStory<typeof Motion> = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        animate={{ x: 100 }}
        transition={{ ease: 'easeOut', duration: 2, delay: 1 }}
        bg='primary'
        color='white'
        p='md'
        rounded='md'
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withType: ComponentStory<typeof Motion> = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        animate={{ x: 100 }}
        transition={{ type: 'spring', stiffness: 100 }}
        bg='primary'
        color='white'
        p='md'
        rounded='md'
      >
        Motion
      </Motion>
    </Center>
  )
}

export const useValueSpecific: ComponentStory<typeof Motion> = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 100 }}
        transition={{ ease: 'easeOut', delay: 1, x: { duration: 2 }, opacity: { duration: 1 } }}
        bg='primary'
        color='white'
        p='md'
        rounded='md'
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withDelayChildren: ComponentStory<typeof Motion> = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { delayChildren: 1 } },
    }),
    [],
  )

  const item: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    }),
    [],
  )

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        initial='hidden'
        animate='visible'
        variants={list}
        w='2xs'
        p='md'
        bg='primary'
        overflow='hidden'
        rounded='3xl'
        cursor='pointer'
        display='flex'
        flexDirection='column'
        gap='md'
      >
        <Motion variants={item} custom={1} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} custom={2} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} custom={3} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} custom={4} bg='white' w='full' h='4' rounded='md' />
      </Motion>
    </Center>
  )
}

export const withStaggerChildren: ComponentStory<typeof Motion> = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 1 } },
    }),
    [],
  )

  const item: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    }),
    [],
  )

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        initial='hidden'
        animate='visible'
        variants={list}
        w='2xs'
        p='md'
        bg='primary'
        overflow='hidden'
        rounded='3xl'
        cursor='pointer'
        display='flex'
        flexDirection='column'
        gap='md'
      >
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
      </Motion>
    </Center>
  )
}

export const withStaggerDirection: ComponentStory<typeof Motion> = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 1, staggerDirection: -1 } },
    }),
    [],
  )

  const item: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    }),
    [],
  )

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        initial='hidden'
        animate='visible'
        variants={list}
        w='2xs'
        p='md'
        bg='primary'
        overflow='hidden'
        rounded='3xl'
        cursor='pointer'
        display='flex'
        flexDirection='column'
        gap='md'
      >
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
      </Motion>
    </Center>
  )
}

export const withAfterChildren: ComponentStory<typeof Motion> = () => {
  const list: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, transition: { when: 'afterChildren' } },
    }),
    [],
  )

  const item: MotionVariants = useMemo(
    () => ({
      hidden: { opacity: 0, transition: { duration: 1 } },
    }),
    [],
  )

  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        animate='hidden'
        variants={list}
        w='2xs'
        p='md'
        bg='primary'
        overflow='hidden'
        rounded='3xl'
        cursor='pointer'
        display='flex'
        flexDirection='column'
        gap='md'
      >
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
        <Motion variants={item} bg='white' w='full' h='4' rounded='md' />
      </Motion>
    </Center>
  )
}

export const withRepeat: ComponentStory<typeof Motion> = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2 }}
        bg='primary'
        color='white'
        p='md'
        rounded='md'
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withRepeatType: ComponentStory<typeof Motion> = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2 }}
        bg='primary'
        color='white'
        p='md'
        rounded='md'
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withRepeatDelay: ComponentStory<typeof Motion> = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
        bg='primary'
        color='white'
        p='md'
        rounded='md'
      >
        Motion
      </Motion>
    </Center>
  )
}

export const withEasing: ComponentStory<typeof Motion> = () => {
  return (
    <Center w='calc(100vw - 16px * 2)' h='calc(100vh - 16px * 2)'>
      <Motion
        animate={{ x: 100 }}
        transition={{ ease: [0.17, 0.67, 0.83, 0.67] }}
        bg='primary'
        color='white'
        p='md'
        rounded='md'
      >
        Motion
      </Motion>
    </Center>
  )
}
