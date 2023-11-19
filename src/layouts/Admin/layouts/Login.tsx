import {
  Button,
  Container,
  Divider,
  PasswordInput,
  Stack,
  TextInput,
} from '@mantine/core';
import { Typography } from '../../../common/components/Typography';
import Colors from '../../../common/components/Colors';
import { useLocalStorage } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [value, setValue] = useLocalStorage({ key: 'admin' });
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      user: '',
      password: '',
    },
  });

  useEffect(() => {
    if (value) {
      navigate('/admin/dashboard');
    }
  }, [value]);

  return (
    <Container size="xl">
      <Typography.HeadLine3 ta="center" mt={50} mb={16}>
        ĐĂNG NHẬP
      </Typography.HeadLine3>
      <Divider />
      <Container size="sm">
        <Typography.HeadLine5 fw="bold" my={40}>
          Đang đăng nhập với tài khoản admin
        </Typography.HeadLine5>
        <form
          onSubmit={form.onSubmit((values) => {
            if (values.user === 'admin' && values.password === 'admin') {
              setValue('admin');
            }
          })}
        >
          <Stack gap={24}>
            <Stack gap={8}>
              <Typography.Body1>Tên đăng nhập *</Typography.Body1>
              <TextInput
                size="md"
                placeholder="tendn@gmail.com"
                {...form.getInputProps('user')}
              />
            </Stack>
            <Stack gap={8}>
              <Typography.Body1>Mật khẩu *</Typography.Body1>
              <PasswordInput
                size="md"
                placeholder="*************"
                type="password"
                {...form.getInputProps('password')}
              />
            </Stack>

            <Button
              variant="filled"
              size="md"
              color={Colors.Brown}
              radius="xs"
              w="100%"
              mb={120}
              type="submit"
            >
              <Typography.Body1 c={Colors.White}>Đăng nhập</Typography.Body1>
            </Button>
          </Stack>
        </form>
      </Container>
    </Container>
  );
};

export default Login;
