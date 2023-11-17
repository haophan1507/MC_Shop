import {
  Button,
  Container,
  Divider,
  PasswordInput,
  Stack,
  TextInput,
} from '@mantine/core';
import { Typography } from '../../common/components/Typography';
import Colors from '../../common/components/Colors';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '@mantine/hooks';

const Login = () => {
  const navigate = useNavigate();
  const [_value, setValue] = useLocalStorage({ key: 'user' });

  return (
    <Container size="xl">
      <Typography.HeadLine3 ta="center" mt={50} mb={16}>
        ĐĂNG NHẬP
      </Typography.HeadLine3>
      <Divider />
      <Container size="sm">
        <Typography.HeadLine5 fw="bold" my={40}>
          Đã có sẵn tài khoản
        </Typography.HeadLine5>

        <Stack gap={24}>
          <Stack gap={8}>
            <Typography.Body1>Gmail *</Typography.Body1>
            <TextInput size="md" placeholder="tendn@gmail.com" />
          </Stack>
          <Stack gap={8}>
            <Typography.Body1>Mật khẩu *</Typography.Body1>
            <PasswordInput
              size="md"
              placeholder="*************"
              type="password"
            />
            <Typography.Body2>Quên mật khẩu?</Typography.Body2>
          </Stack>

          <Button
            variant="filled"
            size="md"
            color={Colors.Brown}
            radius="xs"
            w="100%"
            onClick={() => {
              setValue('user');
              navigate('/');
            }}
          >
            <Typography.Body1 c={Colors.White}>Đăng nhập</Typography.Body1>
          </Button>
        </Stack>

        <Divider my={50} />

        <Typography.HeadLine5>Chưa có tài khoản?</Typography.HeadLine5>
        <Typography.Body1 mt={6}>
          Đăng ký tài khoản ngay để nhận những ưu đãi đến từ MC shop
        </Typography.Body1>

        <Button
          variant="outline"
          size="md"
          color={Colors.Black}
          radius="xs"
          w="100%"
          mt={36}
          mb={120}
          onClick={() => navigate('/auth/register')}
        >
          <Typography.Body1>Đăng ký</Typography.Body1>
        </Button>
      </Container>
    </Container>
  );
};

export default Login;
