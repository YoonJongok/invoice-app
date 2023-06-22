import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Icons } from './Icons';
import { Calendar } from './ui/calendar';
import { Input } from './ui/input';
import { FlexBoxRow } from './ui/flexbox-row';

interface DatePickerProps {
  label: string;
}

export const DatePicker = ({ label }: DatePickerProps) => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Input
          label={label && label}
          className={cn(
            'cursor-pointer'
            // !field.value && 'text-muted-foreground'
          )}
          placeholder='Pick a date'
          value={date ? format(date, 'PP') : 'Pick a date'}
          Icon={() => (
            <FlexBoxRow
              intent={'flexCenterCenter'}
              className='absolute top-1/2 right-2 transform -translate-x-1/2 -translate-y-1/2 '
            >
              <Icons.calendar className='ml-auto h-4 w-4 opacity-50' />
            </FlexBoxRow>
          )}
        />
      </PopoverTrigger>
      <PopoverContent className='w-auto p-0' align='end'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

