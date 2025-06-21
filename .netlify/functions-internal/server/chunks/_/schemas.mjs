import { z } from 'zod';

const MessageRole = z.enum(["user", "assistant"]);
const MessageSchema = z.object({
  content: z.string(),
  role: MessageRole,
  id: z.string().uuid().optional(),
  chatId: z.string().uuid().optional()
}).strict();
const ChatMessageSchema = z.object({
  messages: z.array(MessageSchema),
  chatId: z.string().uuid()
}).strict();
const CreateMessageSchema = z.object({
  content: z.string().min(1),
  role: MessageRole
}).strict();
const CreateProjectSchema = z.object({
  name: z.string().min(1)
}).strict();
const UpdateProjectSchema = z.object({
  name: z.string().min(1)
}).strict();
const CreateChatSchema = z.object({
  title: z.string().min(1).optional(),
  projectId: z.string().uuid().optional()
}).strict();
const UpdateChatTitleSchema = z.object({
  message: z.string().min(1)
}).strict();
const UpdateChatSchema = z.object({
  projectId: z.string().uuid()
}).strict();

export { ChatMessageSchema as C, UpdateChatSchema as U, CreateMessageSchema as a, UpdateChatTitleSchema as b, CreateChatSchema as c, UpdateProjectSchema as d, CreateProjectSchema as e };
//# sourceMappingURL=schemas.mjs.map
