import {
  Box,
  Button,
  Center,
  CheckIcon,
  Checkbox,
  Container,
  Divider,
  Flex,
  Grid,
  Image,
  Input,
  Radio,
  Select,
  Stack,
  TextInput,
  Textarea,
  em,
} from '@mantine/core';
import Colors from '../../common/components/Colors';
import { Typography } from '../../common/components/Typography';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import image1 from '../../assets/images/product-woman/Rectangle 3244.png';
import { useLocalStorage, useMediaQuery } from '@mantine/hooks';
import { useForm } from '@mantine/form';

function Payment() {
  const navigate = useNavigate();
  const [value, setValue] = useState('radio-1');

  const isMobile = useMediaQuery(`(max-width: ${em(576)})`);

  const [user] = useLocalStorage({ key: 'user' });
  const [_totalProduct, setTotalProduct] = useLocalStorage({
    key: 'totalProduct',
  });

  const form = useForm({
    initialValues: {
      name: user ? 'JENNIE KIM' : '',
      phone: user ? '84889629690' : '',
      city: user ? 'Hà Nội' : '',
      district: user ? 'Hoàng Mai' : '',
      ward: user ? 'Hoàng Liệt' : '',
      address: user ? 'Hoàng Liệt' : '',
    },
  });

  useEffect(() => {
    form.setValues({
      name: user ? 'JENNIE KIM' : '',
      phone: user ? '84889629690' : '',
      city: user ? 'Hà Nội' : '',
      district: user ? 'Hoàng Mai' : '',
      ward: user ? 'Hoàng Liệt' : '',
      address: user ? 'Hoàng Liệt' : '',
    });
  }, [user]);

  return (
    <Container size="xl">
      <Image src={image1} />

      <Flex mt={20} mb={28}>
        <Typography.Body2 c={Colors.Grey1}>{`Giỏ hàng  `}</Typography.Body2>
        <Typography.Body2>{`/ Thanh toán`}</Typography.Body2>
      </Flex>

      <Grid mb={140}>
        <Grid.Col span={isMobile ? 12 : 7}>
          <Stack gap={20}>
            <Typography.HeadLine4 tt="uppercase">
              Chi tiết thanh toán
            </Typography.HeadLine4>
            <Stack gap={8}>
              <Typography.Body1>Họ tên *</Typography.Body1>
              <TextInput size="md" {...form.getInputProps('name')} />
            </Stack>
            <Stack gap={8}>
              <Typography.Body1>Số điện thoại *</Typography.Body1>
              <TextInput size="md" {...form.getInputProps('phone')} />
            </Stack>
            <Stack gap={8}>
              <Typography.Body1>Tỉnh/ Thành phố *</Typography.Body1>
              <Select data={['Hà Nội']} {...form.getInputProps('city')} />
            </Stack>
            <Stack gap={8}>
              <Typography.Body1>Quận/ Huyện *</Typography.Body1>
              <Select
                data={['Hoàng Mai']}
                {...form.getInputProps('district')}
              />
            </Stack>
            <Stack gap={8}>
              <Typography.Body1>Phường/ Xã *</Typography.Body1>
              <Select data={['Hoàng Liệt']} {...form.getInputProps('ward')} />
            </Stack>
            <Stack gap={8}>
              <Typography.Body1>Địa chỉ cụ thể *</Typography.Body1>
              <TextInput size="md" {...form.getInputProps('address')} />
            </Stack>
            <Stack gap={8}>
              <Typography.Body1>Ghi chú</Typography.Body1>
              <Textarea rows={8} />
            </Stack>
          </Stack>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 5}>
          <Box
            py={32}
            px={32}
            w="100%"
            style={{
              border: '1px solid #CBCBCB',
            }}
          >
            <Typography.Body1>Tổng hoá đơn</Typography.Body1>
            <Typography.Body2 mt={8} mb={18}>
              Mã hoá đơn: VNCART21280823
            </Typography.Body2>
            <Divider mb={20} />
            <Flex justify="space-between">
              <Typography.Body1>Tiền hàng</Typography.Body1>
              <Typography.Body1>154.000.000 VNĐ</Typography.Body1>
            </Flex>
            <Flex justify="space-between" mt={12} mb={28}>
              <Typography.Body1>Phí vận chuyển</Typography.Body1>
              <Typography.Body1>0 VNĐ</Typography.Body1>
            </Flex>
            <Input placeholder="Mã giảm giá" size="md" mb={20} />
            <Button
              variant="filled"
              size="md"
              color={Colors.Brown}
              radius="xs"
              w="100%"
            >
              <Typography.Body1 c={Colors.White}>
                Áp dụng mã giảm giá
              </Typography.Body1>
            </Button>
            <Flex justify="space-between" mt={28}>
              <Typography.Body1>Số tiền giảm</Typography.Body1>
              <Typography.Body1>- 28.800.000 VNĐ</Typography.Body1>
            </Flex>
            <Divider my={20} />
            <Flex justify="space-between" align="center" mt={28}>
              <Typography.HeadLine5>Tổng SỐ TIỀN</Typography.HeadLine5>
              <Typography.HeadLine4>125.200.000 VNĐ</Typography.HeadLine4>
            </Flex>
          </Box>

          <Box
            py={32}
            px={32}
            mt={24}
            w="100%"
            style={{
              border: '1px solid #CBCBCB',
            }}
          >
            <Typography.TextDescription mb={20}>
              PHƯƠNG THỨC THANH TOÁN
            </Typography.TextDescription>

            <Radio.Group value={value} onChange={setValue}>
              <Radio
                mb={20}
                icon={CheckIcon}
                color={Colors.Brown}
                value="radio-1"
                label="Thanh toán khi nhận hàng"
              />
              <Radio
                mb={20}
                icon={CheckIcon}
                color={Colors.Brown}
                value="radio-2"
                label="Thanh toán qua Paypal"
              />
              <Radio
                mb={20}
                icon={CheckIcon}
                color={Colors.Brown}
                value="radio-3"
                label="Thanh toán qua creditcard"
              />
              <Radio
                icon={CheckIcon}
                color={Colors.Brown}
                value="radio-4"
                label="Thanh toán qua ngân hàng"
              />
            </Radio.Group>
          </Box>

          <Center my={36}>
            <Checkbox
              color={Colors.Brown}
              defaultChecked
              w="80%"
              label="Tick vào đây có nghĩa là bạn đồng ý với Chính sách & Điều khoản của chúng tôi."
            />
          </Center>

          <Center>
            <Button
              variant="filled"
              size="md"
              color={Colors.Brown}
              radius="xs"
              w="80%"
              onClick={() => {
                setTotalProduct('');
                navigate('/product/success');
              }}
            >
              <Typography.Body1 c={Colors.White}>Thanh toán</Typography.Body1>
            </Button>
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Payment;
