namespace Softrocket.Infrastructure.Messaging
{
    public class GetRequest<T>
    {
        public GetRequest(T value)
        {
            this.Value = value;
        }

        public T Value { get; set; }
    }
}
