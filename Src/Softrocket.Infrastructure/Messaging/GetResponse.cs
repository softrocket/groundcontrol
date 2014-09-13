namespace Softrocket.Infrastructure.Messaging
{
    public class GetResponse<T>
    {
        public GetResponse(T message)
        {
            Message = message;
        }

        public T Message { get; set; }
    }
}
