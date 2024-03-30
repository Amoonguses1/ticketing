import { Subjects, Publisher, PaymentCreatedEvent } from '@udemy-tic/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
