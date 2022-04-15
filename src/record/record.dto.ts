import { IsString,IsNumber,IsNotEmpty,IsInt,IsPositive } from 'class-validator';
import { IsOnlyDate } from '../utils/dateOnly.validator';

class SearchRecordDto {
  @IsOnlyDate()
  @IsNotEmpty()
  public startDate: Date;

  @IsOnlyDate()
  @IsNotEmpty()
  public endDate: Date;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  public minCount: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @IsInt()
  public maxCount:number;
}

export default SearchRecordDto;