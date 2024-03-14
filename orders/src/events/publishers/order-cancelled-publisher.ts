import { Publisher, Subjects, OrderCancelledEvent } from '@udemy-tic/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
