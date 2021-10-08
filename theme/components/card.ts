import { ThemingProps } from '@chakra-ui/system';
import { mode } from '@chakra-ui/theme-tools';

const Card = {
  baseStyle: (props: ThemingProps) => ({
    background: mode('white', 'gray.800')(props)
  }),
  variants: {
    subtle: {
      borderRadius: 'md',
      boxShadow: 'sm'
    },
    loud: {
      borderRadius: 'md',
      boxShadow: 'xl'
    }
  },
  defaultProps: {
    variant: 'quite'
  }
};

export default Card;
