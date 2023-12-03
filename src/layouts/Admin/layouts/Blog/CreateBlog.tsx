import {
  Stack,
  Flex,
  Input,
  Box,
  Button,
  Grid,
  Paper,
  Select,
  Textarea,
} from '@mantine/core';
import { IconSearch, IconBellRinging } from '@tabler/icons-react';
import { Typography } from '../../../../common/components/Typography';
import { useNavigate, useParams } from 'react-router-dom';
import Colors from '../../../../common/components/Colors';

function CreateBlog() {
  const navigate = useNavigate();
  const { id } = useParams();

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
          <span style={{ fontWeight: 'bold' }}>Đoàn Mạnh Cường</span>
        </Typography.HeadLine5>
      </Flex>

      <Flex>
        <Typography.HeadLine3 c={Colors.Grey1}>Blog /</Typography.HeadLine3>
        <Typography.HeadLine3>
          {id ? 'Sửa bài viết' : 'Thêm bài viết'}
        </Typography.HeadLine3>
      </Flex>

      <Paper shadow="xs" p="xl">
        <Typography.HeadLine5>Thông tin bài post</Typography.HeadLine5>
        <Stack gap={24} my={24} ml={24}>
          <Flex>
            <Typography.Body1 w={220}>Tiêu đề</Typography.Body1>
            <Input w="100%" placeholder="lorem ipsum" />
          </Flex>

          <Flex>
            <Typography.Body1 w={220}>Danh mục bài viết</Typography.Body1>
            <Select w="100%" data={['Bộ sưu tập']} />
          </Flex>

          <Flex>
            <Typography.Body1 w={220}>Hình ảnh cho tiêu đề</Typography.Body1>
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
              <Typography.Body2 td="underline">Thêm ảnh</Typography.Body2>
            </Box>
          </Flex>

          <Flex>
            <Typography.Body1 w={220}>Giới thiệu</Typography.Body1>
            <Input w="100%" placeholder="lorem ipsum" />
          </Flex>

          <Flex>
            <Typography.Body1 w={220}>Nội dung</Typography.Body1>
            <Textarea
              w="100%"
              rows={6}
              placeholder="Faucibus sed luctus est velit malesuada in. Nibh leo condimentum non turpis ac fringilla vel. Nec in lacus et ac. Et aliquet pellentesque eu venenatis feugiat viverra a facilisi nisl. Sagittis consectetur nisl mauris ut volutpat in viverra lorem integer. Nibh lorem faucibus sapien id."
            />
          </Flex>

          <Flex>
            <Typography.Body1 w={220}>Hình ảnh cho nội dung</Typography.Body1>
            <Box w="100%">
              <Grid columns={25} w="100%">
                {Array(6)
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
                Lưu ý : tối đa 10 ảnh
              </Typography.Body2>
            </Box>
          </Flex>

          <Flex>
            <Typography.Body1 w={220}>Phụ đề</Typography.Body1>
            <Input w="100%" placeholder="lorem ipsum" />
          </Flex>

          <Flex>
            <Typography.Body1 w={220}>Nội dung</Typography.Body1>
            <Textarea
              w="100%"
              rows={6}
              placeholder="Faucibus sed luctus est velit malesuada in. Nibh leo condimentum non turpis ac fringilla vel. Nec in lacus et ac. Et aliquet pellentesque eu venenatis feugiat viverra a facilisi nisl. Sagittis consectetur nisl mauris ut volutpat in viverra lorem integer. Nibh lorem faucibus sapien id."
            />
          </Flex>

          <Flex>
            <Typography.Body1 w={220}>Hình ảnh cho nội dung</Typography.Body1>
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
                Lưu ý : tối đa 10 ảnh
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
}

export default CreateBlog;
