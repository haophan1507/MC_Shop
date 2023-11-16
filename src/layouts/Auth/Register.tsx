import {
  Container,
  Divider,
  Stack,
  TextInput,
  Button,
  Grid,
  PasswordInput,
  Checkbox,
  Center,
  UnstyledButton,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import Colors from '../../common/components/Colors';
import { Typography } from '../../common/components/Typography';
import { useState } from 'react';

const Register = () => {
  const navigate = useNavigate();

  const [first, setFirst] = useState(false);
  console.log(first);
  return (
    <Container size="xl">
      <Typography.HeadLine3 ta="center" mt={50} mb={16}>
        TẠO TÀI KHOẢN MỚI
      </Typography.HeadLine3>
      <Divider />

      {first ? (
        <Container size="sm">
          <Typography.HeadLine5 fw="bold" my={40}>
            Kích hoạt tài khoản
          </Typography.HeadLine5>

          <Typography.Body1 my={40}>
            Chúng tôi sẽ gửi email đến hadiep2023@gmail.com để xác minh tài
            khoản của bạn. Vui lòng nhập mã để kích hoạt tài khoản của bạn.
          </Typography.Body1>

          <Stack gap={8}>
            <Typography.Body1>Mã code *</Typography.Body1>
            <TextInput size="md" placeholder="ex: 123456" />
          </Stack>

          <Typography.Body1 ta="right" my={40}>
            Gửi lại mã?
          </Typography.Body1>

          <Button
            variant="filled"
            size="md"
            color={Colors.Brown}
            radius="xs"
            w="100%"
            mb={120}
            onClick={() => navigate('/auth/login')}
          >
            <Typography.Body1 c={Colors.White}>Kích hoạt</Typography.Body1>
          </Button>
        </Container>
      ) : (
        <Container size="sm">
          <Typography.HeadLine5 fw="bold" my={40}>
            Thông tin tài khoản
          </Typography.HeadLine5>

          <Stack gap={24}>
            <Grid>
              <Grid.Col span={6}>
                <Stack gap={8}>
                  <Typography.Body1>Họ *</Typography.Body1>
                  <TextInput size="md" />
                </Stack>
              </Grid.Col>
              <Grid.Col span={6}>
                <Stack gap={8}>
                  <Typography.Body1>Tên *</Typography.Body1>
                  <TextInput size="md" />
                </Stack>
              </Grid.Col>
            </Grid>

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
            </Stack>
            <Stack gap={8}>
              <Typography.Body1>Nhập lại mật khẩu *</Typography.Body1>
              <PasswordInput
                size="md"
                placeholder="*************"
                type="password"
              />
            </Stack>
          </Stack>
          <Center mt={32} mb={48}>
            <Checkbox
              color={Colors.Brown}
              defaultChecked
              label="Tick vào đây có nghĩa là bạn đồng ý với Chính sách & Điều khoản của
      chúng tôi."
            />
          </Center>

          <Button
            variant="filled"
            size="md"
            color={Colors.Brown}
            radius="xs"
            w="100%"
            onClick={() => setFirst(true)}
          >
            <Typography.Body1 c={Colors.White}>Đăng ký</Typography.Body1>
          </Button>

          <Center mt={24} mb={50}>
            <Typography.Body1 display="inline">
              Đã có tài khoản?
              <UnstyledButton onClick={() => navigate('/auth/login')}>
                <Typography.Body1 td="underline" display="inline">
                  Đăng nhập
                </Typography.Body1>
              </UnstyledButton>
            </Typography.Body1>
          </Center>
        </Container>
      )}
    </Container>
  );
};

export default Register;
