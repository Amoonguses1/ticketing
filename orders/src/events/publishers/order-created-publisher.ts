import { Publisher, OrderCreatedEvent, Subjects } from '@udemy-tic/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
