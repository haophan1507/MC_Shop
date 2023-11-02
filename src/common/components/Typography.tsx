import { Text, TextProps, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface Props extends TextProps {
  children?: React.ReactNode;
}

const HeadLine1 = ({ children, ...props }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  return (
    <Text
      {...props}
      style={{
        fontFamily: 'Lora-SemiBold',
        fontWeight: 600,
        fontSize: isMobile ? 36 : 66,
        lineHeight: isMobile ? '50px' : '92px',
        color: '#212121',
      }}
    >
      {children}
    </Text>
  );
};

const HeadLine2 = ({ children, ...props }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  return (
    <Text
      {...props}
      style={{
        fontFamily: 'SVN-SofiaProMedium',
        fontWeight: 500,
        fontSize: isMobile ? 30 : 42,
        lineHeight: isMobile ? '42px' : '60px',
        color: '#212121',
      }}
    >
      {children}
    </Text>
  );
};

const HeadLine3 = ({ children, ...props }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  return (
    <Text
      {...props}
      style={{
        fontFamily: 'SVN-SofiaProMedium',
        fontWeight: 500,
        fontSize: isMobile ? 24 : 32,
        lineHeight: isMobile ? '34px' : '44px',
        color: '#212121',
      }}
    >
      {children}
    </Text>
  );
};

const HeadLine4 = ({ children, ...props }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  return (
    <Text
      {...props}
      style={{
        fontFamily: 'SVN-SofiaProSemiBold',
        fontWeight: 600,
        fontSize: isMobile ? 20 : 26,
        lineHeight: isMobile ? '28px' : '36px',
        color: '#212121',
      }}
    >
      {children}
    </Text>
  );
};

const HeadLine5 = ({ children, ...props }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  return (
    <Text
      {...props}
      style={{
        fontFamily: 'SVN-SofiaProRegular',
        fontWeight: 400,
        fontSize: isMobile ? 16 : 18,
        lineHeight: isMobile ? '24px' : '26px',
        color: '#212121',
      }}
    >
      {children}
    </Text>
  );
};

const Body1 = ({ children, ...props }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  return (
    <Text
      {...props}
      style={{
        fontFamily: 'SVN-SofiaProRegular',
        fontWeight: 400,
        fontSize: isMobile ? 14 : 16,
        lineHeight: isMobile ? '22px' : '24px',
        color: '#212121',
      }}
    >
      {children}
    </Text>
  );
};

const Body2 = ({ children, ...props }: Props) => {
  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  return (
    <Text
      {...props}
      style={{
        fontFamily: 'SVN-SofiaProRegular',
        fontWeight: 400,
        fontSize: isMobile ? 12 : 14,
        lineHeight: isMobile ? '16px' : '22px',
        color: '#212121',
      }}
    >
      {children}
    </Text>
  );
};

const ButtonNormal = ({ children, ...props }: Props) => {
  return (
    <Text
      {...props}
      style={{
        fontFamily: 'SVN-SofiaProMedium',
        fontWeight: 500,
        fontSize: 16,
        lineHeight: '24px',
        color: '#212121',
      }}
    >
      {children}
    </Text>
  );
};

const ButtonSmall = ({ children, ...props }: Props) => {
  return (
    <Text
      {...props}
      style={{
        fontFamily: 'SVN-SofiaProMedium',
        fontWeight: 500,
        fontSize: 14,
        lineHeight: '22px',
        color: '#212121',
      }}
    >
      {children}
    </Text>
  );
};

const TextPlaceholder = ({ children, ...props }: Props) => {
  return (
    <Text
      {...props}
      style={{
        fontFamily: 'SVN-SofiaProRegular',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '24px',
        color: '#212121',
      }}
    >
      {children}
    </Text>
  );
};

const TextDescription = ({ children, ...props }: Props) => {
  return (
    <Text
      {...props}
      style={{
        fontFamily: 'SVN-SofiaProRegular',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: '28px',
        color: '#212121',
      }}
    >
      {children}
    </Text>
  );
};

export const Typography = {
  HeadLine1,
  HeadLine2,
  HeadLine3,
  HeadLine4,
  HeadLine5,
  Body1,
  Body2,
  ButtonNormal,
  ButtonSmall,
  TextDescription,
  TextPlaceholder,
};
