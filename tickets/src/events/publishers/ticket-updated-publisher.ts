import { Publisher, Subjects, TicketUpdatedEvent } from '@udemy-tic/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
