import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export function QuoteForm({ language, content }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formElement = e.target;
      const web3FormData = new FormData(formElement);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: web3FormData,
      });
      const data = await response.json();
      if (data.success) {
        toast({
          title: content.form.success.title,
          description: content.form.success.description,
          variant: 'success',
          duration: 4000,
        });
        setFormData({ name: '', phone: '', message: '' });
        formElement.reset();
        setOpen(false);
      } else {
        toast({
          title: 'Error',
          description: data.message || 'Failed to submit the form.',
          variant: 'destructive',
        });
      }
    } catch (err) {
      toast({
        title: 'Network Error',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="floating-button quote-button flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileText className="h-5 w-5" />
          <span className="hidden sm:inline">{content.buttons.quote}</span>
        </motion.button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
        <DialogHeader className={language === 'ar' ? 'text-right' : 'text-left'}>
          <DialogTitle>{content.form.title}</DialogTitle>
          <DialogDescription>
            {content.form.description}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value="6c61227f-7a09-4745-bc0a-856149227135" />
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className={language === 'ar' ? 'text-right' : 'text-left'}>
                {content.form.fields.name}
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className={language === 'ar' ? 'text-right' : 'text-left'}>
                {content.form.fields.phone}
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <Label htmlFor="message" className={language === 'ar' ? 'text-right' : 'text-left'}>
                {content.form.fields.message}
              </Label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="min-h-[120px] w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary-teal)] focus:border-transparent resize-vertical"
                placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                required
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                {content.form.buttons.cancel}
              </Button>
            </DialogClose>
            <Button type="submit" className="bg-[var(--primary-teal)] hover:bg-[var(--muted-teal)]">
              {content.form.buttons.submit}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}