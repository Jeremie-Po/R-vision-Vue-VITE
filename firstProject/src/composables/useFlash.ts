import swal from 'sweetalert';

export function useFlash()  {
  function flash (message: string) : Promise<any>{
      return swal('Success !', message, 'success');
  }
  return {flash};
}
