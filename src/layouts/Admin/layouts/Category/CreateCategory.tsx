import {
  Box,
  Button,
  Flex,
  Grid,
  Input,
  Paper,
  Select,
  Stack,
  Textarea,
} from '@mantine/core';
import { IconSearch, IconBellRinging } from '@tabler/icons-react';
import Colors from '../../../../common/components/Colors';
import { Typography } from '../../../../common/components/Typography';
import { useNavigate } from 'react-router-dom';

const CreateCategory = () => {
  const navigate = useNavigate();

  return (
    <Stack gap={32} m={32}>
      <Flex gap={24} align="center">
        <Input
          placeholder="Tìm kiếm..."
          rightSection={<IconSearch size={16} />}
          size="md"
          style={{
            flex: 1,
          }}
        />
        <IconBellRinging />
        <Typography.HeadLine5>
          Good moring, <span style={{ fontWeight: 'bold' }}>Admin</span>
        </Typography.HeadLine5>
      </Flex>

      <Flex>
        <Typography.HeadLine3 c={Colors.Grey1}>
          Các túi ví xách /
        </Typography.HeadLine3>
        <Typography.HeadLine3>LV ON THE GO PM</Typography.HeadLine3>
      </Flex>

      <Paper shadow="xs" p="xl">
        <Typography.HeadLine5>Thông tin cơ bản *</Typography.HeadLine5>
        <Stack gap={24} my={24} ml={24}>
          <Flex>
            <Typography.Body1 w={220}>Hình ảnh sản phẩm</Typography.Body1>
            <Box w="100%">
              <Grid columns={25} w="100%">
                {Array(5)
                  .fill(null)
                  .map((_item, index) => (
                    <Grid.Col span={5} key={index + 'upload_image'}>
                      <Box
                        w="100%"
                        h={120}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px dashed black',
                        }}
                      >
                        <Typography.Body2 td="underline">
                          Thêm ảnh
                        </Typography.Body2>
                      </Box>
                    </Grid.Col>
                  ))}
              </Grid>
              <Typography.Body2 fs="italic" mt={20}>
                Lưu ý : tối đa 5 ảnh, tối thiếu 1 ảnh
              </Typography.Body2>
            </Box>
          </Flex>

          <Flex>
            <Typography.Body1 w={220}>Tên sản phẩm</Typography.Body1>
            <Input w="100%" placeholder="lorem ipsum" />
          </Flex>
          <Flex>
            <Typography.Body1 w={220}>Giới thiệu</Typography.Body1>
            <Textarea
              w="100%"
              rows={6}
              placeholder="Faucibus sed luctus est velit malesuada in. Nibh leo condimentum non turpis ac fringilla vel. Nec in lacus et ac. Et aliquet pellentesque eu venenatis feugiat viverra a facilisi nisl. Sagittis consectetur nisl mauris ut volutpat in viverra lorem integer. Nibh lorem faucibus sapien id."
            />
          </Flex>
          <Flex>
            <Typography.Body1 w={220}>Màu sắc</Typography.Body1>
            <Select w="100%" data={['Đen', 'Trắng', 'Nâu', 'Vàng']} />
          </Flex>
          <Flex>
            <Typography.Body1 w={220}>Giá tiền</Typography.Body1>
            <Flex w="100%" gap={24}>
              <Input w="80%" placeholder="62.000.000" />
              <Input w="20%" placeholder="VNĐ" />
            </Flex>
          </Flex>
        </Stack>
      </Paper>

      <Paper shadow="xs" p="xl">
        <Typography.HeadLine5>Thông tin chi tiết *</Typography.HeadLine5>
        <Stack gap={24} my={24} ml={24}>
          <Flex>
            <Typography.Body1 w={220}>Mô tả</Typography.Body1>
            <Textarea
              w="100%"
              rows={6}
              placeholder="Faucibus sed luctus est velit malesuada in. Nibh leo condimentum non turpis ac fringilla vel. Nec in lacus et ac. Et aliquet pellentesque eu venenatis feugiat viverra a facilisi nisl. Sagittis consectetur nisl mauris ut volutpat in viverra lorem integer. Nibh lorem faucibus sapien id."
            />
          </Flex>
          <Flex>
            <Typography.Body1 w={220}>Chất liệu</Typography.Body1>
            <Textarea
              w="100%"
              rows={6}
              placeholder="Faucibus sed luctus est velit malesuada in. Nibh leo condimentum non turpis ac fringilla vel. Nec in lacus et ac. Et aliquet pellentesque eu venenatis feugiat viverra a facilisi nisl. Sagittis consectetur nisl mauris ut volutpat in viverra lorem integer. Nibh lorem faucibus sapien id."
            />
          </Flex>
          <Flex>
            <Typography.Body1 w={220}>Kích thước</Typography.Body1>
            <Input w="100%" placeholder="lorem ipsum" />
          </Flex>
        </Stack>
      </Paper>

      <Paper shadow="xs" p="xl">
        <Typography.HeadLine5>Thông tin bổ sung</Typography.HeadLine5>
        <Stack gap={24} my={24} ml={24}>
          <Flex>
            <Typography.Body1 w={220}>Hình ảnh model</Typography.Body1>
            <Box w="100%">
              <Grid columns={25} w="100%">
                {Array(5)
                  .fill(null)
                  .map((_item, index) => (
                    <Grid.Col span={5} key={index + 'upload_image'}>
                      <Box
                        w="100%"
                        h={120}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: '1px dashed black',
                        }}
                      >
                        <Typography.Body2 td="underline">
                          Thêm ảnh
                        </Typography.Body2>
                      </Box>
                    </Grid.Col>
                  ))}
              </Grid>
              <Typography.Body2 fs="italic" mt={20}>
                Lưu ý : tối đa 5 ảnh
              </Typography.Body2>
            </Box>
          </Flex>
        </Stack>
      </Paper>

      <Flex justify="flex-end" gap={32}>
        <Button
          variant="transparent"
          size="md"
          color={Colors.Black}
          radius="xs"
          onClick={() => navigate(-1)}
        >
          <Typography.Body1>Huỷ</Typography.Body1>
        </Button>
        <Button
          variant="filled"
          size="md"
          color={Colors.Brown}
          radius="xs"
          onClick={() => navigate(-1)}
        >
          <Typography.Body1 c={Colors.White}>Lưu</Typography.Body1>
        </Button>
      </Flex>
    </Stack>
  );
};

export default CreateCategory;
